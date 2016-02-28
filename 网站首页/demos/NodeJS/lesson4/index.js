/**
 * Created by maomao on 15/12/29.
 */
var server = require("./server")

server.listen(3000,function(){
    console.log('server listening on %j',server.address())
})