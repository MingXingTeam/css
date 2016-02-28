var restify = require('restify'),
    server  = require('./server');

server.get('/route',function(){

});

server.get(/\/.*/,restify.serveStatic({
    directory:__dirname+'/static',
    default:'index.html'
}));


