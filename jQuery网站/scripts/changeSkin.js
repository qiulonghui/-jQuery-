// JavaScript Document
//网站换肤
$(function(){
	$("#skin>li").click(function(){
		$("#"+this.id).addClass("selected").siblings().removeClass("selected");
		$("#cssfile").attr("href","styles/skin/"+this.id+".css")
		})
	})