const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

/* GET api home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Blog API' });
});

// GET all api comments
router.get('/comments', commentController.all_comments_get);

module.exports = router;
