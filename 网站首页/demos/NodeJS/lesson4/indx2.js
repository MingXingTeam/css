/**
 * Created by maomao on 15/12/29.
 */
var server = require("./server")

//运行kill %1时触发
process.on("SIGTERM",function(){
    console.log("SIGTERM")
})

server.listen(3000,function(){
    console.log('server listening on %j',server.address())
})


//按下ctr+c时 触发
//process.on("SIGINT",function(){
//    console.log("SIGINT")
//})

