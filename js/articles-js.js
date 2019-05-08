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
	$(".smallDiv").mouseenter(function(){
		$(this).find("img").css("transform","scale(1.2)");
		$(this).find(".shield").fadeIn(400)
	}).mouseleave(function(){
		$(this).find("img").css("transform","scale(1)");
		$(this).find(".shield").fadeOut(500)
	})
	//section里按钮背景颜色切换
	$(".content-div").mouseenter(function(){
		var $index=$(this).index();
			$(".content-div").eq($index).css("background-color","#20d8da")
			$(".btn-div").eq($index).css("background-color","#232323")
	})
	$(".content-div").mouseleave(function(){
		var $index=$(this).index();
			$(".content-div").eq($index).css("background-color","#232323")
			$(".btn-div").eq($index).css("background-color","#20d8da")
	})
	//移动数字变色
	$(".page-item").eq(0).children().css("color","#20d8da");
	$(".page-item").mouseenter(function(){
		var $index=$(this).index()
		if($index>0){
			$(".page-item").eq($index).children().css("color","#20d8da")
		}
	}).mouseleave(function(){
		var $index=$(this).index()
		if($index>0){
			$(".page-item").eq($index).children().css("color","#424242")
		}
	})
	//点击数字改变显示的div
	$(window).resize(function(){
		var $winW=$(window).width();
		if($winW<=768){
			$(".smaDIv").children().fadeOut()
			$(".page-item").click(function(){
				$(".page-item").children().css("background-color","rgba(0,0,0,0)")
				var $index=$(this).index()
				$(".smaDIv").children().eq($index).fadeIn(1000).siblings().fadeOut(10)
				$(".smaDIv").children().eq($index).animate({"margin-top":"0"},10)
			})
		}
		else{
			$(".smaDIv").children().fadeIn(1000)
			$(".smaDIv").children().animate({"margin-bottom":"110px"})
		}
	})
	var $winW=$(window).width();
		if($winW<=768){
			$(".smaDIv").children().fadeOut()
			$(".page-item").click(function(){
				$(".page-item").children().css("background-color","rgba(0,0,0,0)")
				var $index=$(this).index()
				$(".smaDIv").children().eq($index).fadeIn(1000).siblings().fadeOut(10)
			})
		}
	
})