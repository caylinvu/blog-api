const express = require('express');
const router = express.Router();

/* GET api home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Blog API' });
});

module.exports = router;
