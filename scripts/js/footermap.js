$(document).ready(function(){
	$(".footer-map-phoenix").hover(function(){
		jQuery(this).addClass('hover');
	});
	$(".footer-map-phoenix").mouseout(function(){
		jQuery(this).removeClass('hover');
	});
});