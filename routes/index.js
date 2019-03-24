var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V15 - It is Starvin Marvin the Paranoid Pirate! - This is grrrreat!' });
});

module.exports = router;
