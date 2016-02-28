/**
 * Created by maomao on 15/12/27.
 */
var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    /*index对应views里面的index.ejs*/
    res.render('about', { title: 'Express',name:'毛毛' });
});

module.exports = router;
