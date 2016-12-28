/*衣服颜色切换*/
$(function(){
	$(".color_change>ul>li>a").click(function(){
		$(this).find("img").addClass("hover");
		$(this).parent("li").siblings().find("a>img").removeClass("hover");
		var alt=$(this).find("img").attr("alt");
		$(".color_change>strong").text(alt);
		var hrefsmall=$(this).attr("hrefsmall");
		var hrefbig=$(this).attr("hrefbig");
		$("#bigImg").attr("src",hrefsmall);
		$("#thickImg").attr("href",hrefbig);
		
		$(".imgList>span").eq(index).find("li").eq(0).find("a").click();//主动点击一次；
		
		//切换小图的衣服颜色
		var index=$(".color_change>ul>li>a").index(this);
		$(".imgList>span").eq(index).show()
							.siblings().hide()
								.end().find("li").show();
		}).eq(0).click()
	})
