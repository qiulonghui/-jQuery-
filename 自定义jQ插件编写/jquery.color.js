;(function($){
	$.fn.extend({
		"color":function(value){
			if(value){
			return this.css("color",value);
				}else{
					return this.css("color")
					}
			},
		"border":function(value){
			if(value){
			return this.css("border",value);
				}else{
					return this.css("border")
					}
			}
		});
	})(jQuery);