/**
 * Created by maomao on 15/12/14.
 */
function a(){
    return function(){

    }
}

var b = a;
var c = a;
console.info(b===c);//true

var b = a();
var c = a();
console.info(b===c);//true


function a(){
    return 5;
}

var b = a;
var c = a;
console.info(b===c);//true

var b = a();
var c = a();
console.info(b===c);//true

////////


f = function(){this.name = "aa"}
f.prototype.sayhello = function(){
    alert(this.name);
}
f.prototype.b = function(){setTimeout(this.sayhello,1000)}
var c = new f;
c.b();//弹出空白框

//////////

var name = 123;
var b = {
    "name":'A',
    sayHello:function(){
        alert(this.name);
    }
}

b.sayHello();//A

/*


后台返回json格式是怎么样的 可以不可以带双引号
跨域问题的解决 a.taobao.com b.taobao.com window.domain ; jsonp
cmd amd
url输入发生了什么
requirejs 和 seajs 之间的区别； 模块名称是否可以去掉 去掉怎么实现模块关联
自己是否写了组件
看了哪些JS的书
如何解决加载图片问题 src是小图 然后点击到那的时候再加载大图
延迟加载是怎么实现的 什么原理
预加载是什么原理
如何组件化
异步和同步的机制
offsetWidth offsetHeight元素的宽高
给每个弹窗一个标示  如果有这个表示 标示已经存在该弹窗了
参考jquery插件的写法来写相关组件
用户体验方面你又什么想法
angular.element(document.getElementsByTagName('input')[0]).injector().get('zippy')
直接在谷歌搜索 比如react cdn、

*/
