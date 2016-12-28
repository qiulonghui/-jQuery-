// JavaScript Document
/* 点击左侧产品小图片切换大图 */
$(function(){
	$(".imgList>span>li>a>img").click(function(){
		var bigHref=$(this).parent("a").attr("bighref");
		$("#thickImg").attr("href",bigHref)
		})	
	})