// Create web serber
// 1. Import Express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// 2. Create router
router.get('/', commentController.index);
router.get('/create', commentController.create);
router.post('/create', commentController.postCreate);
router.get('/:id', commentController.show);
router.get('/:id/delete', commentController.delete);

// 3. Export router
module.exports = router;