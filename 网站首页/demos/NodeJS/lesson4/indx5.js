/**
 * Created by maomao on 15/12/29.
 */
var server = require("./server")

server.listen(3000,function(){
    console.log('server listening on %j',server.address())
});

var shuttingdown = false;
["SIGINT","SIGTERM"].forEach(function(signal){
    process.on(signal,shutdown)
})


function shutdown(){
    if(! shuttingdown){
        shuttingdown = true;
        server.close();

        setTimeout(function(){
            process.exit();
        },30e3).unref();//unref()
    }
}