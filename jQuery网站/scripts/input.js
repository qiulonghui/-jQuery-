// JavaScript Document
/* 搜索文本框效果 */
$(function(){
	$("#inputSearch").focus(function(){
		 $(this).addClass("focus")
		 if(this.value==this.defaultValue){  
			  $(this).val("");           
		  } 
	}).blur(function(){
	    $(this).removeClass("focus")
		if(this.value==""){
		$(this).val(this.defaultValue)}
		}).keyup(function(e){
			if(e.which==13){
				alert("回车提交表单成功")
			}
	  })
})