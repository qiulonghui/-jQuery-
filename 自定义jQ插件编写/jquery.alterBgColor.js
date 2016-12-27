// JavaScript Document
;(function($){
	$.fn.extend({
		"alterBgColor":function(options){
			options=$.extend({
				odd:"odd",
				even:"even",
				selected:"selected"
				},options);
				$("tbody>tr:odd",this).addClass(options.odd);
				$("tbody>tr:even",this).addClass(options.even);
				$("tbody>tr",this).click(function(){
					if($(this).hasClass(options.selected)){
						$(this).removeClass(options.selected)
							.find(":checkbox").prop("checked",false)
						}else{
							$(this).addClass(options.selected)
									.find(":checkbox").prop("checked",true)
							}
					});
				$("tbody :checkbox:checked",this).parents("tr").addClass(options.selected);
				return this;
			}
		});
	})(jQuery);