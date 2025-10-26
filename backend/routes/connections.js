const express = require('express');
const { protect } = require('../middleware/auth');
const {
  getConnections,
  createConnection,
  acceptConnection,
  deleteConnection,
} = require('../controllers/connectionController');

const router = express.Router();

router.use(protect);

router.get('/', getConnections);
router.post('/', createConnection);
router.patch('/:id/accept', acceptConnection);
router.delete('/:id', deleteConnection);

module.exports = router;
