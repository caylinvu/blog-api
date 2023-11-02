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
