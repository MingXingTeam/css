https://www.youtube.com/watch?v=jo_B4LTHi3I
>function add(a,b){return a+b;}

>process.pid

>process

>process.en

>vim hello-world.js

echo("hello")

sleep(2)

echo("world")


setTimeout(function(){//没有休眠

    console.info("world")

}

console.info("hello")


>cp hello-world.js hello-world2.js

>vim hello-world2.js

setInterval(function(){//可以做其他事

    console.info("world")

}

console.info("hello")

>vim web-server.js

var h=require("http")

var s = h.createServer(function(req,res){

     res.writeHead(200,{"content-type":"text/plain"})

    res.end("hello world\n");

})


s.listener(8000);

>node web-server.js

>curl http://localhost:8000/  (浏览器输入http://localhost:8000/试试)

>curl -i http://localhost:8000/ （具体头信息）

>ab -n 100 -c 100 http://127.0.0.1:8000

> vim tcp-server.js

var s = net.createServer(socket){

  socket.write("hello\n");

  socket.end("world\n");

}

s.listener(8000)



> telnet localhost 8000

> nc localhost 8000


> vim tcp-server.js

var s = net.createServer(socket){

  socket.write("hello\n");

  socket.write("world\n");

  socket.on('data',function(){

    socket.write(data);

 });

}

s.listener(8000)



> vim chat.js

net = require("net")

var sockets = [];

var s = net.Server(function(socket){

    socket.push(socket);

     socket.on('data',function(d){

        for(var i = 0;i<socket.length;i++){

               if(socket[i]==socket) continue;

            socket[i].write(d);

        }

     });

     socket.on('end',function(){

           //等价于delete sockets[i]

            var i = sockets.indexOf(socket)

            sockets.splice(i,1);

     })

})


> Math.random()

>vim debug.js

function foo(){

   debugger;

   return 1+2;

}

foo();

>node debug.js   (node inspector可以调试node)

>node debug debug.js

 debug>run

debug>backtrace

debug>list

debug>quit

>which npm

