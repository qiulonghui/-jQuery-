// JavaScript Document
/* 品牌活动模块横向滚动 */
$(function(){
	var jBLN=parseInt($("#jnBrandList").css("left"))//css()获取的值带有px
	var pageW=$("#jnBrandList>ul>li").outerWidth()*4//一个版面的宽度 <!---->width()获取的值不带为数字
	$("#jnBrandTab>ul>li").click(function(){
		$(this).addClass("chos").siblings().removeClass("chos");
		var index=$("#jnBrandTab>ul>li").index(this);
		$("#jnBrandList").stop(true,true).animate({"left":-pageW*index},1000)
		}).eq(0).click()
	})
