var express = require('express');
var router = express.Router();

/* GET users listing. */
/*请求过来的第二步*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
