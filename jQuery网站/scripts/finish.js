/*最终购买输出*/
$(function(){
	$("#cart a").click(function(){
		var pro_name=$(".jnProDetail>h4").text();
		var pro_size=$(".pro_size strong").text();
		var pro_color=$(".color_change strong").text();
		var pro_num=$("#num_sort").val();
		var pro_price=$(".pro_price strong").text();
		var dialog="感谢你的购买。\n你购买的\n"+
				   "产品是："+pro_name+";\n"+
				   "尺寸是："+pro_size+";\n"+
				   "颜色是："+pro_color+";\n"+
				   "数量是："+pro_num+";\n"+
				   "总价是："+pro_price+"元";
				   $("#jnDialogContent").html(dialog)
				   $("#basic-dialog-ok").modal()
				   return false;
		})
	})
	
	