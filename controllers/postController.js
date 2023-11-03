const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

// Display all api posts
exports.posts_get = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find().exec();
  return res.send(allPosts);
});

// Display individual api post
exports.post_get = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId).exec();
  return res.send(post);
});

// Create a new blog post
exports.post_create = asyncHandler(async (req, res, next) => {
  res.send('POST CREATE');
});

// Delete a blog post (and all associated comments)
exports.post_delete = asyncHandler(async (req, res, next) => {
  res.send(`POST DELETE ID ${req.params.postId}`);
});

// Update a blog post
exports.post_update = asyncHandler(async (req, res, next) => {
  res.send(`POST UPDATE ID ${req.params.postId}`);
});
