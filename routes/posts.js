const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const verifyToken = require('../middleware/verifyToken');

/* POSTS */

// GET api posts
router.get('/', postController.posts_get);

// GET individual api post
router.get('/:postId', postController.post_get);

// POST api blog post (blog author only)
router.post('/', verifyToken, postController.post_create);

// DELETE api blog post (blog author only)
router.delete('/:postId', verifyToken, postController.post_delete);

// PUT api blog post (blog author only)
router.put('/:postId', verifyToken, postController.post_update);

/* POST COMMENTS */

// GET api comments on post
router.get('/:postId/comments', commentController.comments_get);

// GET individual api comment on post
router.get('/:postId/comments/:commentId', commentController.comment_get);

// POST api blog comment
router.post('/:postId/comments', commentController.comment_create);

// DELETE api blog comment (blog author only)
router.delete('/:postId/comments/:commentId', verifyToken, commentController.comment_delete);

// PUT api blog comment (blog author only)
router.put('/:postId/comments/:commentId', verifyToken, commentController.comment_update);

module.exports = router;
