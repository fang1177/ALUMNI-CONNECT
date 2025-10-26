const Message = require('../models/Message')
const User = require('../models/User')

// @desc    Get conversation messages
// @route   GET /api/messages?conversationId=...
// @access  Private
exports.getMessages = async (req, res, next) => {
  try {
    const { conversationId, withUserId } = req.query

    let match = {}
    if (conversationId) {
      match.conversationId = conversationId
    } else if (withUserId) {
      // Build consistent conversation ID by sorting two user IDs
      const ids = [req.user.id, withUserId].sort()
      match.conversationId = `${ids[0]}_${ids[1]}`
    } else {
      return res.status(400).json({ success: false, message: 'conversationId or withUserId is required' })
    }

    const messages = await Message.find(match).sort({ createdAt: 1 })
    res.status(200).json({ success: true, data: messages })
  } catch (error) {
    next(error)
  }
}

// @desc    Send a message
// @route   POST /api/messages
// @access  Private
exports.sendMessage = async (req, res, next) => {
  try {
    const { toUserId, content } = req.body
    if (!toUserId || !content) {
      return res.status(400).json({ success: false, message: 'toUserId and content are required' })
    }

    const receiver = await User.findById(toUserId)
    if (!receiver) {
      return res.status(404).json({ success: false, message: 'Receiver not found' })
    }

    const ids = [req.user.id, toUserId].sort()
    const conversationId = `${ids[0]}_${ids[1]}`

    const message = await Message.create({
      sender: req.user.id,
      receiver: toUserId,
      content,
      conversationId,
    })

    // TODO: Integrate Socket.io emit from server if available

    res.status(201).json({ success: true, data: message })
  } catch (error) {
    next(error)
  }
}

// @desc    Mark message as read
// @route   PATCH /api/messages/:id/read
// @access  Private
exports.markRead = async (req, res, next) => {
  try {
    const msg = await Message.findById(req.params.id)
    if (!msg) {
      return res.status(404).json({ success: false, message: 'Message not found' })
    }
    if (msg.receiver.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to mark this message as read' })
    }
    msg.read = true
    await msg.save()
    res.status(200).json({ success: true, data: msg })
  } catch (error) {
    next(error)
  }
}