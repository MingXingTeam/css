var svg,//Raphael对象
	currentW,//屏幕宽度
	currentH,//屏幕高度
	context;//app的上下文
/**
 * 应用程序对象
 * @type {Object}
 */
var app = {
	init:function(){
		currentW = $(window).width();
		currentH = $(window).height();
		svg = new Raphael("svg",currentW,currentH);
		context=this;
		this.draw_line();
	},
	/**
	 * 动画作线
	 * @return {void} void
	 */
	draw_line:function() {
		//定义一个起点，在左小角
	    var path = svg.path("M 0," + currentH + " L 0," + currentH).attr({
	        fill: "#111"
	    });
	    //动画作线
	    path.animate({
	    	//从左小角到中点
	        path: "M 0," +currentH + " L " +currentW / 2 + "," +currentH / 2
	    }, 1000, ">", function() {
	    	//去掉线
	    	svg.clear();
	    	//画完线以后
	    	context.draw_circle();
	    });
	},
	/**
	 * 动画作圆
	 * @return {void} void
	 */
	draw_circle:function() {
		var circle = svg.circle(currentW / 2, currentH / 2, 0).attr({
            fill: "#111",
            stroke: "#111"
        });
        //以easeIn动画形式创建圆
        circle.animate({
	        r: "142"//最终的半径
	    }, 1000, ">",function() {	
	    	context.draw_circle_line();
	    });
	},
	draw_circle_line:function () {
		// var circle_line = new Raphael("circle_line",390,390);
		var rot=0;
		var b = svg.path("M 720,217.5 L 724,217.5 L 722,224.5 z").attr({
            fill: "#ccc",
            opacity: 1,
            stroke: "3"
        });
        $("body").css("background", "#e7e7e7")
        function a(){
        	var c = b.clone().attr({
                    transform: "r" + rot + ",720,238.5t0,-10"
                });
	        c.animate({
	            transform: "r" + rot + ",720,238.5t0,0s0.9",
	            opacity: 1
	        }, 2e3, "elastic", function() {});
	        if(rot<350){
		       setTimeout(function() {
		            a();
		        }, 20);
		       rot += 10
			}else{
				//出现图
				context.picWheel();
			}
        }
    	a();
	},
	picWheel:function() {
		
		var b = vmvideos.slice(32,51);
	    var angleplus = 360/(b.length);
	   
		var q = [];
		function init(){
			var j = 0;
			for(var i =0;i<b.length;i++){
				var img = new Image;
				img.id = b[i].url;
				img.src = b[i].thumb;
				img.onload = function(){
					//加载图片
					var c = svg.image(this.src, 690, 40, 210, 150).attr({
		                opacity: 1//不可见
		            });
		            //给image增加一个id
					c.node.id = this.id;
					q.push(c);
					
					e = angleplus * j;

					c.rotate(e, 800, 500);

		            //裁剪Image图片
		            c.node.setAttribute("clip-path", "url(#clip_ring)");
		            //clipPath元素增加一个Path元素：
		            //<path style="" fill="none" stroke="#000000" d="M800,500L853.4050241495155,266.01730107636234A240,240,0,0,0,746.5949758504846,266.01730107636234Z">
		            $("clipPath")[0].appendChild(slicepath[2].node);

		            j++;

		            //如果全部加载完了
		            if(j==b.length){
		            	//旋转整个圆
	        			doRotateWheel();
		            }
				}
			}
		}
		function change(){
			//定义路径,是一个扇形
			window.slicepath = [svg.path("M200,175.223L97.395,34c62.396-45.334,142.814-45.334,205.211,0L200,175.223z")];
			// window.slicepath = [svg.path("M,800,500,L,853.4050241495155,266.01730107636234,A,240,240,0,0,0,746.5949758504846,266.01730107636234,z").attr({
		 //            stroke: "1"
		 //        }), svg.path("M,800,500,L,875.6571175451469,168.52450985817995,A,340,340,0,0,0,724.3428824548531,168.52450985817995,z").attr({
		 //            stroke: "1"
		 //        }), svg.path("M,800,500,L,876.4051981734494,66.68458867462846,A,440,440,0,0,0,723.5948018265507,66.68458867462846,z").attr({
		 //            stroke: "1"
		 //        })];
		    //获得svg和defs元素
		    // var svg_elem = document.getElementsByTagName("svg")[0];
		    // var defs = document.getElementsByTagName("defs")[0];

		    // //定义clipPath元素
		    // var ns = "http://www.w3.org/2000/svg";
	     //    var c = document.createElementNS(ns, "clipPath");
	     //    c.setAttribute("id", "clip_ring");
	     //    defs.appendChild(c);
	       
	     //    //给Image绑定事件
	     //    init();
		}

		function doRotateWheel(){
			for(var i=0;i<q.length;i++){
				var newgrade = 360 + angleplus * i;
				// console.info("asdf："+angleplus * i);
				// console.info("旋转的角度："+newgrade);
				var loop = function() {
					q[i].attr({
						"transform": "r" + angleplus * i + " 800,500"
					}).animate({
						"transform": "r" + newgrade +  " 800,500"
					}, 30000, loop);
				};
				loop();
			}
		}
		change();
	}

}

$(function() {
	app.init();
});
