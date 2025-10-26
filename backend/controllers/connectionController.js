const Connection = require('../models/Connection');
const User = require('../models/User');

// @desc    Get user connections
// @route   GET /api/connections
// @access  Private
exports.getConnections = async (req, res, next) => {
  try {
    const connections = await Connection.find({
      $or: [
        { requester: req.user.id },
        { recipient: req.user.id }
      ]
    })
    .populate('requester', 'name email profile')
    .populate('recipient', 'name email profile')
    .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: connections
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create connection request
// @route   POST /api/connections
// @access  Private
exports.createConnection = async (req, res, next) => {
  try {
    const { recipientId } = req.body;

    // Check if connection already exists
    const existingConnection = await Connection.findOne({
      $or: [
        { requester: req.user.id, recipient: recipientId },
        { requester: recipientId, recipient: req.user.id }
      ]
    });

    if (existingConnection) {
      return res.status(400).json({
        success: false,
        message: 'Connection already exists'
      });
    }

    const connection = await Connection.create({
      requester: req.user.id,
      recipient: recipientId
    });

    await connection.populate('requester', 'name email profile');
    await connection.populate('recipient', 'name email profile');

    res.status(201).json({
      success: true,
      data: connection
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Accept connection request
// @route   PATCH /api/connections/:id/accept
// @access  Private
exports.acceptConnection = async (req, res, next) => {
  try {
    const connection = await Connection.findById(req.params.id);

    if (!connection) {
      return res.status(404).json({
        success: false,
        message: 'Connection not found'
      });
    }

    if (connection.recipient.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to accept this connection'
      });
    }

    connection.status = 'accepted';
    await connection.save();

    // Update user connection counts
    await User.findByIdAndUpdate(connection.requester, {
      $inc: { 'stats.connections': 1 }
    });
    await User.findByIdAndUpdate(connection.recipient, {
      $inc: { 'stats.connections': 1 }
    });

    res.status(200).json({
      success: true,
      data: connection
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete connection
// @route   DELETE /api/connections/:id
// @access  Private
exports.deleteConnection = async (req, res, next) => {
  try {
    const connection = await Connection.findById(req.params.id);

    if (!connection) {
      return res.status(404).json({
        success: false,
        message: 'Connection not found'
      });
    }

    if (connection.requester.toString() !== req.user.id && 
        connection.recipient.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this connection'
      });
    }

    await Connection.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Connection deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
