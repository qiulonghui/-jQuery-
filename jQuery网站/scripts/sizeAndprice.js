// 产品尺寸切换
$(function(){
	$(".pro_size ul>li").click(function(){
		var litext=$(this).text();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".pro_size strong").text(litext)
		})
	})	
	
//价格计算
$(function(){
	$("#num_sort option").click(function(){
		var nowprice=$(this).text() * $(".tbDetailPrice strong").text()
		$(".pro_price strong").text(nowprice)
		})
	})