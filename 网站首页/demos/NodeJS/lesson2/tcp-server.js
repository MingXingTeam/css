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
    //var emit = conn.emit;
    //conn.emit = function(event){
    //    console.log("connection emitted event type %j",event)
    //    emit.apply(conn,arguments)
    //}
    conn.on('data', function (buf) {
        //conn.write(buf);
        //conn.write(buf.toString);
        //console.log('data:%j',buf)
        //console.log('data:',buf.toString())
        //console.log('data:',buf)
        process.stdout.write('data:'+buf)
    })
})

s.listen(8000,function(){
    console.log("The server listen on %j",s.address())
})

module.exports = s;
