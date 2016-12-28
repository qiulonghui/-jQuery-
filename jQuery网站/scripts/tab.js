// JavaScript Document
$(function(){
	$(".tab_menu>ul>li").click(function(){
		$(this).addClass("selected")
				.siblings().removeClass("selected");
	$(".tab_box>div").eq($(".tab_menu>ul>li").index(this)).show().siblings().hide();
		}).hover(function(){
			$(this).addClass("hover")
			},function(){
				$(this).removeClass("hover")	
				})
	})