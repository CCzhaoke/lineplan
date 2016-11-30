function Plan(obj){
			this.dvr=obj.right;
			this.deg=obj.deg;
			this.bg=obj.background;			
			this.dir=obj.direction;
			this.speed=obj.speed || 3;

			if(typeof obj.left=="string"){
				this.dvl=document.querySelector(obj.left);
			}else{
				this.dv1=obj.left;
			}
			if(typeof obj.right=="string"){
				this.dvr=document.querySelector(obj.right);	
			}else{
				this.dvr=obj.right;
			}
					
			if(obj.deg>360){
				this.deg=obj.deg%360;
			}else if(obj.deg<1){
				this.deg=obj.deg*360;
			}	
			this.init();
		}

		Plan.prototype={
			init:function(){	
				this.load(this.deg);
				console.log(this.dvr)
			},
			fnt:function(dg){			
				if(dg<=180){
					this.dvr.style.transform="rotateZ("+dg+"deg)";			
				}else if(dg>180 && dg<360){
					this.dvl.style.transform="rotateZ("+(dg-180)+"deg)";
					this.dvr.style.transform="rotateZ(0deg)";
					this.dvr.style.background=this.bg;
					
				}
			},
			fnf:function(dg){
				if(dg<=180){
					this.dvl.style.transform="rotateZ("+(-dg)+"deg)";		
				}else if(dg>180 && dg<360){
					this.dvl.style.transform="rotateZ("+(-dg)+"deg)";
					this.dvr.style.transform="rotateZ(180deg)";
					this.dvr.style.background=this.bg;
				}
			},
			load:function(num){
				var i=0;
				if(this.dir){
					var time=setInterval(function(){
						i++;
						this.fnt(i);
					if(i>=num){
						i=num;
					}					
					}.bind(this),this.speed);
					setInterval(function(){
						clearInterval(time);
						this.fnt(num);
					}.bind(this),4000)
				}else{
					var time=setInterval(function(){
						i++;
						this.fnf(i);
					if(i>=num){
						i=num;
					}					
					}.bind(this),this.speed);
				}
			}
		}