//评分效果
$(function(){
	$("ul.rating li a").click(function(){
		var title=$(this).attr("title");
		alert("你给商品的评分是："+title);
		var cl=$(this).parent().attr("class");
		$("ul.rating").removeClass().addClass("rating "+cl+"star")
		})
	})