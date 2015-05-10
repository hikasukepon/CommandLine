(function($) {
    $.extend({
		print_r: function print_r( obj, dst) {
				function dump(arr,level) {
					var ret = "";
					if(!level) level = 0;
					if(level >= 30) {
						return "Nesting too deep\n";
					}
					
					//The padding given at the beginning of the line.
					var level_padding = "";
					for(var j=0;j<level;j++) level_padding += "    ";

					if(arr == null)	{ //null
						ret = "null\n";
					} else if(typeof(arr) == 'object') { //Array/Hashes/Objects 
						if (arr.constructor == Array) {
							ret += level_padding + "Array\n";
						} else if ( arr.constructor == Object ) {
							ret += level_padding + "Object\n";
						} else {
							ret += level_padding + "Other " + arr.toString() + "\n";
							return ret;
						}
						ret += level_padding + "(\n";
						for(var item in arr) {
							var value = arr[item];
							if(typeof(value) == 'object') { //If it is an array,
								ret += level_padding + "    [" + item + "] =>\n";
								ret += dump(value,level+2);
							} else {
								ret += level_padding + "    [" + item + "] => "
								         + value + "\n";
							}
						}
						ret += level_padding + ")\n";
					} else if(typeof(arr) == 'function') { // function
						ret = arr+"\n";
					} else { //Stings/Chars/Numbers etc.
						ret = arr+"\n";
					}
					return ret;
				}
				function parseStr( src) {
					
					src = src.replace(/&/g, "&amp;");
					src = src.replace(/ /g, "&nbsp;");
					src = src.replace(/</g, "&lt;");
					src = src.replace(/>/g, "&gt;");
					src = src.replace(/\n/g, "<br />");
					
					return src;
				}


				if (typeof(dst) == "undefined")	{
					$("body").append(parseStr(dump(obj)));
				} else if (typeof(dst) == "string") {
					 $("#" + dst).append(parseStr(dump(obj)));
				} else if (typeof(dst) == "boolean" && dst == true) {
					alert(dump(obj));
				}
			}
	});
})(jQuery);