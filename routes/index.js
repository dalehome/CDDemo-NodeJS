var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express V13 - It is Marvin the Paranoid Android! - This is grrrreat!' });
});

module.exports = router;
