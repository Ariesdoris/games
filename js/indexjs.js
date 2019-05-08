$(function(){
	//导航条吸顶
	var $top=$("header").offset().top;
//	var $height=$("header").height();
	$(document).scroll(function(){
		if($(document).scrollTop()>=$top){
			$("header").addClass("fix");
			$("#carousel-example-generic").css("margin-top","72px");
		}
		else{
			$("header").removeClass("fix")
		}
	})
	//图标按钮变颜色
	$(".iconmargin .text-center a").mouseenter(function(){
		$(this).css("background-color","#000000").css("color","white")
	})
	$(".iconmargin .text-center a").mouseleave(function(){
		$(this).css("background-color","#20d8da").css("color","white")
	})
	//section里按钮背景颜色切换
	$(".content-div").eq(0).css("background-color","#20d8da")
	$(".btn-div").eq(0).css("background-color","#424242")
	
	$(".content-div").mouseenter(function(){
		var $index=$(this).index();
			$(".content-div").eq($index).css("background-color","#20d8da")
			$(".btn-div").eq($index).css("background-color","#424242")
	})
	$(".content-div").mouseleave(function(){
		var $index=$(this).index();
			$(".content-div").eq($index).css("background-color","#424242")
			$(".btn-div").eq($index).css("background-color","#20d8da")
	})
	//section里鼠标移动播放按钮变色
	$(".div-circle").mouseenter(function(){
		$(".div-circle").css("background-color","#20d8da")
	}).mouseleave(function(){
		$(".div-circle").css("background-color","rgba(255, 0, 0, 0.63)")
	})
	//鼠标点击播放按钮的模态框效果
	$(".div-circle").mousedown(function(){
		$modalPic=$(".div-circle").siblings("img").attr("src")
		$(".modal-content>img").attr("src",$modalPic)
	})
	//section里点击左边小框改变大框图片
	$(".content-div").mousedown(function(){
		var $index=$(this).index();
		if($index>=5){
			$smindex=$index-5;
			$(".pic>img").attr("src","img/bg-img/"+(45+$smindex)+".jpg");
		}
		else{
			$(".pic>img").attr("src","img/bg-img/"+(45+$index)+".jpg");
		}
		$(".content-div").eq($index).css("background-color","#20d8da").siblings().css("background-color","#424242")
		$(".btn-div").eq($index).css("background-color","#424242")
	})
	//section制作图片滑动的橱窗效果
	$moveHeight=$(".pad").height()*$(".pad").height()/$(".div-move").height();
	$("#move").height($moveHeight)
	$(".pad").mouseenter(function(){
		$("#move").stop().fadeIn(1000)
	})
	$(".pad").mouseleave(function(){
		$("#move").stop().fadeOut(1000)
	})
	$("#move").mousedown(function(event){
		event =event ||window.event;
		var $moveStart=event.clientY
		$("#move").mousemove(function(event){
			event =event ||window.event;
			var $moveEnd=event.clientY-$moveStart;
			if($moveEnd<0){
				$moveEnd=0;
			}else if($moveEnd>$(".pad").height()-$("#move").height()){
				$moveEnd=$(".pad").height()-$("#move").height();
			}
			$("#move").css("top",$moveEnd)
			var $divMove=$moveEnd*($(".div-move").height()-$(".pad").height())/($(".pad").height()-$moveHeight);
			$(".div-move").css("top",-$divMove)
		})
	})
	$("#move").mouseleave(function(){
			$("#move").mousemove(null);
		})
	//seconddiv鼠标进入效果
	$(".smallDiv").mouseenter(function(){
		$(this).find(".shield").fadeIn(400)
		$(this).find("img").css("transform","scale(1.2)")
	}).mouseleave(function(){
		$(this).find(".shield").fadeOut(500)
		$(this).find("img").css("transform","scale(1)")
	})
	//页面下拉效果
	$(document).scroll(function(){
		//回到顶部
		if($(document).scrollTop()>0){
			$(".returnTop").fadeIn(2000)
		}
		else{
			$(".returnTop").fadeOut(1000)
		}
		$(".returnTop").click(function(){
			$("html,body").stop().animate({scrollTop:0},1000) 
		})
	})
	//又是一个轮播效果
	var $lunIndex=0;
	$(".right-btn").click(function(){
		$lunIndex++;
		if($lunIndex>10){
			$lunIndex=0;
		}
		else{
			$(".con-lunbo-div").css("left","-"+200*$lunIndex+"px")
		}
	})
	$(".left-btn").click(function(){
		$lunIndex--;
		if($lunIndex<0){
			$lunIndex=0;
		}
		else{
			$(".con-lunbo-div").css("left","-"+200*$lunIndex+"px")
		}
	})
	var $timer=setInterval(function(){
			$lunIndex++;
			if($lunIndex>10){
				$lunIndex=0;
			}
			else{
				$(".con-lunbo-div").css("left","-"+200*$lunIndex+"px")
			}
		},2000)
	$(".another-lunbo").mouseleave(function(){
		clearInterval($timer)
		 $timer=setInterval(function(){
			$lunIndex++;
			if($lunIndex>10){
				$lunIndex=0;
			}
			else{
				$(".con-lunbo-div").css("left","-"+200*$lunIndex+"px")
			}
		},2000)
	})
	$(".another-lunbo").mouseenter(function(){
		clearInterval($timer)
		$(".another-lunbo").stop(true)
	})
	
	
	
})