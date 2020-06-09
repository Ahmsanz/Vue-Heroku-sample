const express = require('express');
const controller = require('../controllers/posts.controller')

const router = express.Router(); 

// Get Posts
router.get('/', controller.get);

// Add Posts
router.post('/', controller.create);

// Delete Posts
router.delete('/del/:postID', controller.delete);
module.exports = router;