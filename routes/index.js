var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V14 - It is Garvin the Paranoid Peanut! - This is grrrreat!' });
});

module.exports = router;
