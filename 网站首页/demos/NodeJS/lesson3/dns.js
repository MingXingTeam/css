/**
 * Created by maomao on 15/12/27.
 */
var dns = require('dns')

dns.lookup('google.com',function(err,ip){
    if(err) return handleError(error);
    console.log('google.com resolved to %s',ip);
})