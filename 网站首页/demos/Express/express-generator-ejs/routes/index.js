var express = require('express');
var router = express.Router();
var test = require("../test.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  /*index对应views里面的index.ejs*/
  res.render('index', { title: 'Express' ,test:test});
});

module.exports = router;
