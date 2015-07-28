##display属性
+ 常用值：none,block,inline-blok     none该元素不占空间
+ inline-block元素：a span
+ block元素:div p header footer
 
 ##居中
 ```css
 div{
    max-width:500px;
    margin:0 auto;
 }
 ```
 当窗口宽度小于div宽度会出现水平滚动条，max-width属性可以解决该问题
 
 ##盒模型
 margin,padding,border
 ```css
 div{
    width:200px;
    margin:0 auto;
    padding:20px;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    box-sizing:border-box;
 }
 ```
 每次计算宽度的时候 要加上padding border等值 用box-sizing属性以后，宽度设置为多少就是多少
 box-sizing支持情况：ie8+
 
 ##position属性 
 默认是static relative absolute fixed
 有：top left right bottom
 relative：相对正常的位置  空隙不会被填补
 fixed:相对视窗 空隙被填补
 absolute:相对第一个不为static定位的父元素 如果没有这样的父元素 就相对body元素，并且会随页面滚动而滚动 ** 待测试 **
 
 ##

