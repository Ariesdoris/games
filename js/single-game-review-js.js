$(function(){
	//导航条吸顶
	var $top=$("header").offset().top;
//	var $height=$("header").height();
	$(document).scroll(function(){
		if($(document).scrollTop()>=$top){
			$("header").addClass("fix");
			$(".bigImg").css("margin-top","72px");
		}
		else{
			$("header").removeClass("fix")
		}
	})
	//回到顶部
	$(document).scroll(function(){
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
	//进入图片效果
	$(".bigImg").mouseenter(function(){
		$(".breadcrumb-text").css({
			"background-color":"#20d8da",
			"border-left":"2px solid white"
		})
		}).mouseleave(function(){
			$(".breadcrumb-text").css({
			"background-color":"rgba(0, 0, 0, 0.6)",
			"border-left":"2px solid #20d8da"
		})
	})
})