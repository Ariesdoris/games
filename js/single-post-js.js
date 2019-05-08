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
	//点击数字
	$(".page-item").click(function(){
		$(".page-item").children().css("background-color","rgba(0,0,0,0)")
	})
	$(".egames-btn").mouseenter(function(){
		$(".egames-btn").css({
			"background-color":"#000000",
			"color":"white"
		})
	}).mouseleave(function(){
		$(".egames-btn").css({
			"background-color":"#20d8da",
		})
	})
})