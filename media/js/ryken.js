// JavaScript Document

$(document).ready(function() {

	/* Email harvesting deterrent */
	$("span.mailme").each(function(){
		var spt = $(this);
		var at = / at /;
		var dot = / dot /g;
		var addr = $(spt).text().replace(at,"@").replace(dot,".");
		$(spt).after('<a href="mailto:'+addr+'" title="Send an email">'+ addr +'</a>');
		$(spt).remove();
	});

	/* PNG24 fix for IE6 */
	$("img.png24").pngfix();

	/* Drop Shadow */
	$("img.image_dropshadow_left").each(function(){
		$(this).wrap('<div class="image_dropshadow img_left"></div>');
		$(this).parent().css("width",$(this).attr("width")+"px");
		$(this).parent().css("height",$(this).attr("height")+"px");
		/*var img_width = $(this).attr("width") + 2;
		var img_height = $(this).attr("height") + 2;*/
	});

	$("img.image_dropshadow_right").each(function(){
		$(this).wrap('<div class="image_dropshadow img_right"></div>');
		$(this).parent().css("width",$(this).attr("width")+"px");
		$(this).parent().css("height",$(this).attr("height")+"px");
	});


	/* Set class="active" to relevant nav <li> */
	$("#nav li a").each(function(){
		var currentUrl = window.location.pathname;
		var linkUrl = $(this).attr("href");
		if ((currentUrl.substr(0,(linkUrl.length)) == linkUrl) && (linkUrl != "/")) {
			$(this).parent().addClass('active');
		}

	});
    /* New patient tab navigation  */
	$("#np_nav li a").each(function(){
		var currentUrl = window.location.pathname;
		var linkUrl = $(this).attr("href");
		if ((currentUrl == linkUrl) || (currentUrl == '/new_patients/' && linkUrl== '/new_patients/expectations/')) {
			$(this).parent().addClass('active');
		}

	});

});

