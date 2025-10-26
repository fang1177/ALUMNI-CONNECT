const express = require('express');
const router = express.Router();

// Placeholder message routes
// Implement actual message controllers in controllers/messageController.js
router.get('/', (req, res) => res.json({ success: true, data: [] }));

module.exports = router;
