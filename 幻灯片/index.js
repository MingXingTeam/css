function id(id){
	return document.getElementById(id);
}

function byClass(className){
	var result = [];
	var all = document.getElementsByTagName("*");
	// for(var i=0;i<all.length;i++){
		for(var i in all){
		if(all[i].className == className){
			result.push(all[i]);
		}
	}
	return result;
}
//在DOM中注入初始化的HTML并为每个元素绑定必要的事件处理器
var curImage = null;//跟踪记录当前所看的图片
window.onload = function(){
	/**	
	* 建立如下DOM结构
	* <div id="overlay"></div>
	* <div id="gallery">
	* 	<div id="gallery_image"></div>
	*   <div id="gallery_prev"><a href="">&laquo;Prev</a></div>
	*   <div id="gallery_next"><a href="">Next &raquo;</a></div>
	*   <div id="gallery_title"></div>
	* </div>
	**/

	var gallery = document.createElement('div');
	gallery.id = "gallery";

	gallery.innerHTML = 
		'<div id="gallery_image"></div>	'+
		'<div id="gallery_prev"><a href="">&laquo;Prev</a></div>'+
		'<div id="gallery_next"><a href="">Next &raquo;</a></div>'+
		'<div id="gallery_title"></div>';

	document.body.appendChild(gallery);

	id("gallery_next").onclick = nextImage;//nextImage id
	id("gallery_prev").onclick = prevImage;//prevImage

	var g = byClass('gallery',"ul");//byclass函数

	for(var i=0;i<g.length;i++){
		var link = tag("a",g[i]);//tag函数
		for(var j=0;j<link.length;j++){
			link[j].onclick = function(){
				showOverlay();//显示灰色背景覆盖层 showOverlay
				showImage(this.parentNode);//在图库内显示图片 showImage
				return false;//去掉a标签跳转
			}
		} 
		addSlideShow(g[i]);//加入幻灯导航 addSlideShow
	}
}

//创建覆盖层
function createOverlay(){
	var overlay = document.createElement("div");
	overlay.id="overlay";
	overlay.onclick = hideOverlay;
	document.body.appendChild(overlay);
}

//隐藏覆盖层
function hideOverlay(){
	curImage = null;//重置当前图片
	hide(id("overlay"));//隐藏覆盖层
	hide(id("gallery"));//隐藏图库
}
//显示覆盖层
function showOverlay(){
	var over = id("overlay");
	over.style.height = pageHeight() + "px";//保持和页面一直的高度
	over.style.width = pageWidth()+"px";

	fadeIn(over,50,10);//渐隐出现隐藏层
}

//显示图库当前图片
function showImage(cur){
	curImage = cur;
	var img = id("gallery_image");
	//如果存在当前图片则删除
	if(img.firstChild)
		img.removeChild(img.firstChild);
	//并用新图片取而代之
	img.appendChild(cur.firstChild.cloneNode(true));
	
	id("gallery_title").innerHTML = cur.firstChild.firstChild.alt;

	var gallery = id("gallery");

	//设置正确的class，这样才能显示恰当的尺寸
	gallery.className = cur.className;

	fadeIn(gallery,100,10);

	//确保图片在屏幕中的位置正确
	adjust();
}

//基于图片宽高和用户滚动的具体情况，重定位图库
function adjust(){
	var obj = id("gallery");
	if(!obj) return;
	var w = getWidth(obj);
	var h = getHeight(obj);
	//相对窗口垂直居中
	var t = scrollY() + (windowHeight()/2) - (h/2);
	if(t<0) t = 0;

	var l = scrollX() + (windowWidth()/2) - (w/2);
	if(l<0) l = 0;

	setY(obj,t);
	setX(obj,l);
};
window.onresize = document.onscroll = adjust;//用户滚动页面或者重置浏览器大小，重新调整图库的位置
//获取上一个图片并显示它
function prevImage(){
	showImage(prev(curImage));
	return false;
}
//获取上下一个图片并显示它
function nextImage(){
	showImage(next(curImage));
	return false;
}
//增加用来初始化幻灯片的导航
function addSlidShow(elem){
	//创建幻灯片的头部和包裹元素
	var div = document.createElement("div");
	div.className = "slideshow";

	//显示幻灯片的名字
	var span = document.createElement("span");
	span.innerHTML = g[i].title;
	div.appendChild(span);

	//创建一个链接，可以把图库所有的图片都当做幻灯片中的一幕
	var a = document.createElement("a");
	a.href = "";
	a.innerHTML = "&raquo;View as a slideshow";

	//点击后开始幻灯
	a.onclick = function(){
		startShow(this.parentNode.nextSibling);
		return false;
	};

	//为页面插入新的导航和头部
	div.appendChild(a);
	elem.parentNode.insertBefore(div,elem);
}

//初始化幻灯
function startShow(obj){
	//定位到图库的每一张图片
	var elem = tag("li",obj);

	//定位到显示的整个图库
	var gallery = id("gallery");

	//遍历每一个匹配的图库图片
	for(var i=0;i<elem.length;i++)
		new function(){
			//记录被引用的当前图片
			var cur = elem[i];
			//我们每5s显示一张新图片
			setTimeout(function(){
				//显示指定的图片
				showImage(cur);
				//并在3.5秒后渐隐（因为需要有1s的渐隐时间）
				setTimeout(function(){
					fadeOut(gallery,0,10);
				},3500);
			},i*5000);
		};

	//隐藏全部
	setTimeout(hideOverlay,5000*elem.length);
	//但还是显示覆盖层，因为幻灯刚开始
	showOverlay();
}
