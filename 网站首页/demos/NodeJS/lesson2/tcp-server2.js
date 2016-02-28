/**
 * Created by maomao on 15/12/27.
 */

var net = require("net")

var s = net.createServer()

s.on('connection',function(conn){
    conn.setEncoding('utf8')
    conn.once('close',function(){
        console.log("connection closed");
    })
    conn.pipe(conn);
})

s.listen(8000,function(){
    console.log("The server listen on %j",s.address())
})

module.exports = s;
