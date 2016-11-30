#test
##twobg

	`$("#box").sess({
			width:200,  外容器宽度
			height:10,	外容器高度
			num:.36,	进度条百分比，小数
			bg:"#ccc",	容器背景色
			color:"red",进度条颜色
			dy:"px",	宽高单位
			arc:20,		拖拽圆形的宽高(选填)
			arcbg:"#fff",	拖拽圆形的背景色
			arcsh:"#666",	拖拽圆形的阴影大小和阴影色
			callfn:function(obj){ 设置好后的回调函数(选填)
				返回一个对象包含四个参数
				对象包含四个属性
				obj.ele  圆形拖拽
				obj.par	 进度条盒子
				obj.tag  进度条外部大盒子
				obj.max  进度条的最大宽度
				obj.min  圆形拖拽的半径(主要用于增加进度条宽度防止大盒子背景色显示)
				ele.on("click",function(){
					alert("这是点击事件")
				})

			}
		})`


##twoborder 

	`obj={
			left:dv1,    *	定位在左边的盒子(可使用id或DOM0级对象)			
			right:dv2,	 *	定位在右边的盒子(可使用id或DOM0级对象)
			deg:200,		需要旋转的度数或者是由百分比转化小数(小于1)
			direction:true,	顺时针旋转还是逆时针旋转(选填，默认逆时针，true为顺时针)
			background:"blue",进度条的颜色(与外部盒子的背景色相同)
			speed:3   		进度条加载的速度(选填，默认为3)
		}`