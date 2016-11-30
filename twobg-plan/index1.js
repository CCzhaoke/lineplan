;(function($){

	$.fn.sess=function(opt){
		//调用方法与说明  基于jQuery或zepto
		//$("#box")为外部容器，所有属性在对象参数中设置
		/*	$("#box").sess({
			width:200,  外容器宽度
			height:10,	外容器高度
			num:.36,	进度条百分比，小数
			bg:"#ccc",	容器背景色
			color:"red",进度条颜色
			dy:"px",	宽高单位
			arc:20,		拖拽圆形的宽高
			arcbg:"#fff",	拖拽圆形的背景色
			arcsh:"#666",	拖拽圆形的阴影大小和阴影色
			callfn:function(ele){ 设置好后的回调函数
				ele.on("click",function(){
					alert("这是点击事件")
				})

			}
		})*/
		var newopt=$.extend({},{},opt);

	return	$(this).each(function(){
		$(this).css("display","block");
		var str=$("<div><p><span></span></p></div>");
		$(this).append(str);
		var pwh=newopt.num*newopt.width;
		str.css({
			"width":newopt.width+newopt.dy,
			"height":newopt.height+newopt.dy,
			"background":newopt.bg,
			"border-radius":newopt.height/2+newopt.dy
		});
		str.find("p").css({
			"width":pwh+newopt.dy,
			"height":newopt.height+newopt.dy,
			"background":newopt.color,
			"border-radius":newopt.height/2+newopt.dy,
			"position":"relative"
		})
		if(newopt.arc){
			str.find("span").css({
				"position":"absolute",
				"width":newopt.arc+"px",
				"height":newopt.arc+"px",
				"border-radius":"50%",
				"background":newopt.arcbg,
				"box-shadow":newopt.arcsh,
				"top":-(newopt.arc-newopt.height)/2+"px",
				"right":-(newopt.arc-newopt.height)/2+"px"
			})
		}
		var obj={
			ele:str.find("span"),
			par:str.find("p"),
			tag:str,
			max:(newopt.width-newopt.arc/2),
			min:newopt.arc/2
		}
		newopt.callfn && newopt.callfn(obj);
	})

	}



})(Zepto);