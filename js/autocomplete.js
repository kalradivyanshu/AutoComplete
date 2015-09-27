var main = function() {
	$("#searchbox").keyup(function(){
		var text = $("#searchbox").val()
		if(text.length > 0) {
			$(".suggestiontable").show();
			$(".suggestiontable").css("position","absolute");
			$(".suggestiontable").css("z-index","100");
			$(".suggestiontable").css("box-shadow","5px 5px 2px grey");
			var backendurl = $("#searchbox").data('backend');
			var getvar = $("#searchbox").data('getvar');
			$.ajax({url: backendurl+"?"+getvar+"="+text, success: function(result){
				if (result == undefined || result == null || result.length == 0)
				{	
					$(".suggestiontable").hide()
				}
				else
				{
					$(".suggestiontable").empty()
					$.each(result, function(index, suggest) {
						if (suggest.name1.length === 0)
						{	
							$(".suggestiontable").hide()
						}
						else
						{	
							var toappend = "<tr class='suggestions' data-name=\""+suggest.name1+"\" data-link=\""+suggest.link1+"\"><td><img src='"+suggest.img+"' style='width:50px;'></td><td>"+suggest.name1+"<br><span class='username'>"+suggest.username+"</span></td></tr>"
							$(".suggestiontable").append(toappend)
							$("#options tr.suggestions").mouseover(function(){
								$(".suggestions").removeClass("selected")
								$(this).addClass("selected")
								var suggestion = $(this).data('name')
								$("#searchbox").val(suggestion)
							});
							$("#options tr.suggestions").click(function(){
								console.log(suggest.link1)
								window.location = $(this).data('link')
							});
							$("#options tr.suggestions").mouseout(function(){
								$(".suggestions").removeClass("selected")
								$("#searchbox").val(text)
							});
							/*$("#searchbox").focusout(function(){
								$(".suggestiontable").hide()
							});*/
						}
					});
				}
			}});
		}
		else if(text.length == 0){
			$(".suggestiontable").css("display","none")
		}
	});
	$("#searchbox").change(function(){
		var text = $("#searchbox").val()
		if(text.length > 0) {
			$(".suggestiontable").show()
		}
		else {
			$(".suggestiontable").hide()
		}
	});
}
$(document).ready(main);