const Comment = require('../models/comment');
const Post = require('../models/post');
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
