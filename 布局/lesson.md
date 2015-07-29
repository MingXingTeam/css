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
 
 ##float属性
 
*可用于文字环绕图片*

##clear属性
clear:left 清除其他元素在它上面的向左浮动 使自己在浮动元素的下方

##媒体查询
```css
@media screen and (min-width:600px){
    
}
@media screen and (max-width:599px){
}
```

##inline-block和float
制作网格方面：inline-block比float好用  float需要clear

+ vertical-align会影响到inline-block元素 元素上下会有间隔 需要设置vertical-align:top;
+ 设置宽度
+ 如果元素（html标签）之间有空格会导致元素（渲染后）之间有间隙

##column-count和column-gap
```css3
.three-column{
    padding:1em;
    -moz-column-count:3;
    -moz-column-gap:1em;
    -webkit-column-count:3;
    -webkit-column-gap:1em;
    column-count:3;
    column-gap:1em;
}
```
##flexbox属性
```css3
.container{
    display:-webkit-flex;
    display:flex;
}
.initial{
    -webkit-flex:initial;
    flex:initial;
    width:200px;
    min-width:100px;
}
.none{
    -webkit-flex:none;
    flex:none;
    width:200px;
}
.flex1{
    -webkit-flex:1;
    flex:1;
}
.flex2{
    -webkit-flex:2;
    flex:2;
}

```
*flexbox垂直居中布局*
```css3
.vertical-container{
    height:300px;
    display:-webkit-flex;
    display:flex;
    -webkit-align-items:center;
    align-items:center;
    -webkit-justify-content:center;
    justify-content:center;
}
```
