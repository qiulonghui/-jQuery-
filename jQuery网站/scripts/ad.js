/* 首页大屏广告效果 */
/*$(function(){
	var $imgrolls = $("#jnImageroll div a");
	$imgrolls.css("opacity","0.7");
    var len  = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();	
	//滑入 停止动画，滑出开始动画.
	$('#jnImageroll').hover(function(){
			if(adTimer){ 
				clearInterval(adTimer);
			}
		 },function(){
			adTimer = setInterval(function(){
			    showImg(index);
				index++;
				if(index==len){index=0;}
			} , 2000);
	}).trigger("mouseleave");
})
//显示不同的幻灯片
function showImg(index){
	var $rollobj = $("#jnImageroll");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
			 .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1"); 
}*/

$(function(){
	var $rolllist= $("#jnImageroll div a");
	var index=0;
	var len=$("#JS_imgWrap").find("img").length;
	var time=null
	//上一张与下一张
	$("#jnNoticeInfo ul li a").click(function(){
		clearInterval(time)
		if(this.id=="prev"){index--};
		if(this.id=="next"){index++};
		if(index>=len){index=0}
				$("#JS_imgWrap").find("img").eq(index).fadeIn().siblings().fadeOut();
				$("#jnImageroll").find("div a").removeClass("chos").eq(index).addClass("chos")
				$("#JS_imgWrap").attr("href",$rolllist.eq(index).attr("href"));
				time=setInterval(move,5000)
	}).trigger("mouseleave");
			
	//经过时停止播放，并显示当前图片
	$("#jnImageroll").find("div a").mouseover(function(){
			index=$("#jnImageroll").find("div a").index(this)-1;
			move();
	}).eq(0).mouseover()
		
		//自动滚动
	$("#jnImageroll").hover(function(){
		clearInterval(time);
		},function(){
				time=setInterval(move,5000)
			}).trigger("mouseleave");
			
		//动画函数	
		function move(){
			index++;
			if(index>=len){index=0}
			$("#JS_imgWrap").find("img").eq(index).fadeIn().siblings().fadeOut();
			$("#jnImageroll").find("div a").removeClass("chos").eq(index).addClass("chos")
			$("#JS_imgWrap").attr("href",$rolllist.eq(index).attr("href"));
			}
	})