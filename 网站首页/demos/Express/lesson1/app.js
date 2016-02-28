/**
 * Created by maomao on 15/12/27.
 */
var http = require('http')

function onListenEvent(req,res){
    res.writeHead(200,{'Content-Type':"text/html"})
    res.end('<h1>hello word</h1>')
}

http.Server(onListenEvent);

app.listen(3000,'localhost');
console.log("server is listen on port 3000")