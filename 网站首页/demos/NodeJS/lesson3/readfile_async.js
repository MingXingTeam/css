/**
 * Created by maomao on 15/12/27.
 */
var fs = require("fs");
fs.readFile('./test.txt',function(err,results){
    if(err) return handleError(err);/*handleError是未定义的 只是表示处理错误*/
    console.log("File contents:",results);
})