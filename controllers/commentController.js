const Comment = require('../models/comment');
const asyncHandler = require('express-async-handler');

// Display all api comments on post
exports.comments_get = asyncHandler(async (req, res, next) => {
  const allCommentsOnPost = await Comment.find({ post_id: req.params.postId }).exec();
  return res.send(allCommentsOnPost);
});

// Display individual api comment on post
exports.comment_get = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId).exec();
  return res.send(comment);
});

// Create a new comment on a post
exports.comment_create = asyncHandler(async (req, res, next) => {
  res.send(`COMMENT CREATE ON POST ID ${req.params.postId}`);
});

// Delete a comment on a post
exports.comment_delete = asyncHandler(async (req, res, next) => {
  res.send(`COMMENT DELETE ID ${req.params.commentId}`);
});

// Update a comment on a post
exports.comment_update = asyncHandler(async (req, res, next) => {
  res.send(`COMMENT UPDATE ID ${req.params.commentId}`);
});