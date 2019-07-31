
	class Banner{
		constructor(newoImg,newoLi){
			this.index=0;
			this.oImg=newoImg;
			this.oLi=newoLi;
			this.oImg.style.background="url(img/0.jpg)";
			this.oLi[0].style.background="red";
		}
		//设置li的背景颜色
		setLiColor(){
			for(let i=0; i<oLi.length; i++){
				if(i==this.index){
					this.oLi[i].style.background="red";
				}else{
					this.oLi[i].style.background="black";
				}
			}
		}
		setoImgcolor(){
			this.oImg.style.background="url(img/"+this.index+".jpg)";
		}
		btn(){
			let oBtn=document.getElementsByTagName("button");
			let that=this;
			oBtn[1].onclick=function(){
				that.index++;
				if(that.index==that.oLi.length){
					that.index=0;
				}
				that.setoImgcolor();
				that.setLiColor();
			}
			oBtn[0].onclick=function(){
				that.index--;
				if(that.index==-1){
					that.index=that.oLi.length-1;
				}
				that.setoImgcolor();
				that.setLiColor();
			}
		}
		eventLi(){
			let that=this;
			for(let i=0; i<oLi.length; i++){
				this.oLi[i].onclick=function(){
					that.index=i;
					that.setLiColor();
					that.setoImgcolor();
				}
			}
		}
		setInterval(){
		
				let that=this;
				setInterval(function(){
					that.index++;
					if(that.index==that.oLi.length){
						that.index=0;
					}
					that.setoImgcolor();
					that.setLiColor();
				},5000)
		}
	}
	let oImg=document.querySelector("#box");
	let oLi=document.getElementsByTagName("li");
	let banner=new Banner(oImg,oLi);
	banner.btn();
	banner.eventLi();
	banner.setInterval();

	
	