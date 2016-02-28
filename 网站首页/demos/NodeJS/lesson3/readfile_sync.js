/**
 * Created by maomao on 15/12/27.
 */
var fs = require("fs");

var results = fs.readFile('./test.txt')

//console.log('File contents:','utf-8',results)
console.log('File contents:',results)