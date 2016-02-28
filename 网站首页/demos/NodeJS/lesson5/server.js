module.exports = require('http').createServer(function(req,res){
    setTimeout(function(){
        res.end("<h1>Hello World</h1>")
    },5e3);
})