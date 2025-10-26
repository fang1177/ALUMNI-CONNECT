const express = require('express')
const {
  getUsers,
  getUser,
  updateProfile,
  deleteUser
} = require('../controllers/userController')
const { protect, authorize } = require('../middleware/auth')

const router = express.Router()

router.use(protect)

router.get('/', authorize('admin'), getUsers)
router.get('/:id', getUser)
router.put('/profile', updateProfile)
router.delete('/:id', authorize('admin'), deleteUser)

module.exports = router