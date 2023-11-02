const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

// GET api posts
router.get('/', postController.posts_get);

// GET individual api post
router.get('/:postId', postController.post_get);

// GET api comments on post
router.get('/:postId/comments', commentController.comments_get);

// GET individual api comment on post
router.get('/:postId/comments/:commentId', commentController.comment_get);

module.exports = router;
