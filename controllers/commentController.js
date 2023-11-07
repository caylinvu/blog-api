const Comment = require('../models/comment');
const asyncHandler = require('express-async-handler');

// Display all api comments on post
exports.comments_get = asyncHandler(async (req, res, next) => {
  const allCommentsOnPost = await Comment.find({ post: req.params.postId })
    .sort({ timestamp: -1 })
    .exec();
  return res.send(allCommentsOnPost);
});

// Display individual api comment on post
exports.comment_get = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId).exec();
  if (comment.post.toString() === req.params.postId) {
    return res.send(comment);
  } else {
    const err = new Error('Invalid "postId" provided in path');
    err.status = 404;
    return next(err);
  }
});

// Create a new comment on a post
exports.comment_create = asyncHandler(async (req, res, next) => {
  const comment = new Comment({
    text: req.body.text,
    timestamp: new Date(),
    display_name: req.body.display_name,
    post: req.params.postId,
  });

  await comment.save();
  return res.send(comment);
});

// Delete a comment on a post
exports.comment_delete = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId).exec();
  if (comment.post.toString() === req.params.postId) {
    await Comment.findByIdAndDelete(req.params.commentId);
    return res.send(comment);
  } else {
    const err = new Error('Invalid "postId" provided in path');
    err.status = 404;
    return next(err);
  }
});

// Update a comment on a post
exports.comment_update = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId).exec();
  if (comment.post.toString() === req.params.postId) {
    const updatedComment = new Comment({
      text: req.body.text,
      timestamp: comment.timestamp,
      display_name: comment.display_name,
      post: comment.post,
      _id: req.params.commentId,
    });

    await Comment.findByIdAndUpdate(req.params.commentId, updatedComment, {});
    res.send(updatedComment);
  } else {
    const err = new Error('Invalid "postId" provided in path');
    err.status = 404;
    return next(err);
  }
});
