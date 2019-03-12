var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V11 - We see Marvin the Paranoid Monkey!' });
});

module.exports = router;
