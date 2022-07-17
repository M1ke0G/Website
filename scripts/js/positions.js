$(document).ready(function() {
	var open1 = false;
	$(".security-right > *").hide();
	$(".security-details:nth-child(1)").show();
	$(".dedicore-tab-1:nth-child(2) .security-text").css("font-weight", "bold");
	$(".dedicore-tab-1:nth-child(2) .security-text").css("color", "#fff");
	$(".dedipack-enter-button").click(function() {
		$('.dedipack-server-right img').attr('id','gray');
		$('.dedipack-server-left').animate({marginTop: -25, opacity:0}, 'slow', function() {
			$(this).remove();
			$('.dedipack-checkout-title').delay(500).animate({marginTop: 120}, 'slow');
			$(".dedipack-hidden-left").delay(500).fadeIn('slow');
		});
		$('.dedipack-smoke').delay(250).fadeOut('slow');
	});
	$(".open-position-1").show();
	$(".open-position-1").click(function() {
		$(this).toggleClass("open");
		if (open1 === false) {
			$("#posarrow-1").attr("src","../img/up-arrow.png");
			open1 = true;
		} else {
			$("#posarrow-1").attr("src","../img/down-arrow.png");
			open1 = false;
		}
	});
	var open2 = false;
	$(".open-position-2").click(function() {
		$(this).toggleClass("open");
		if (open2 === false) {
			$("#posarrow-2").attr("src","../img/up-arrow.png");
			open2 = true;
		} else {
			$("#posarrow-2").attr("src","../img/down-arrow.png");
			open2 = false;
		}
	});
	var open3 = false;
	$(".open-position-3").click(function() {
		$(this).toggleClass("open");
		if (open3 === false) {
			$("#posarrow-3").attr("src","../img/up-arrow.png");
			open3 = true;
		} else {
			$("#posarrow-3").attr("src","../img/down-arrow.png");
			open3 = false;
		}
	});
	$(".dedicore-tab-1:nth-child(2)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedicore-tab-1:nth-child(2) .security-text").css("font-weight", "bold");
		$(".dedicore-tab-1:nth-child(2) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(1)").fadeIn("fast");
	});
	$(".dedicore-tab-1:nth-child(3)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedicore-tab-1:nth-child(3) .security-text").css("font-weight", "bold");
		$(".dedicore-tab-1:nth-child(3) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(2)").fadeIn("fast");
	});
	$(".dedicore-tab-1:nth-child(4)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedicore-tab-1:nth-child(4) .security-text").css("font-weight", "bold");
		$(".dedicore-tab-1:nth-child(4) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(3)").fadeIn("fast");
	});
	$(".dedicore-tab-1:nth-child(5)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedicore-tab-1:nth-child(5) .security-text").css("font-weight", "bold");
		$(".dedicore-tab-1:nth-child(5) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(4)").fadeIn("fast");
	});
	$(".dedicore-tab-1:nth-child(6)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedicore-tab-1:nth-child(6) .security-text").css("font-weight", "bold");
		$(".dedicore-tab-1:nth-child(6) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(5)").fadeIn("fast");
	});
	$(".dedishield-tab:nth-child(2)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedishield-tab:nth-child(2) .security-text").css("font-weight", "bold");
		$(".dedishield-tab:nth-child(2) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(6)").fadeIn("fast");
	});
	$(".dedishield-tab:nth-child(3)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedishield-tab:nth-child(3) .security-text").css("font-weight", "bold");
		$(".dedishield-tab:nth-child(3) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(7)").fadeIn("fast");
	});
	$(".dedishield-tab:nth-child(4)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedishield-tab:nth-child(4) .security-text").css("font-weight", "bold");
		$(".dedishield-tab:nth-child(4) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(8)").fadeIn("fast");
	});
	$(".dedishield-tab:nth-child(5)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedishield-tab:nth-child(5) .security-text").css("font-weight", "bold");
		$(".dedishield-tab:nth-child(5) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(9)").fadeIn("fast");
	});
	$(".dedishield-tab:nth-child(6)").click(function() {
		$(".security-text").css("font-weight", "normal");
		$(".security-text").css("color", "#D0DCE0");
		$(".dedishield-tab:nth-child(6) .security-text").css("font-weight", "bold");
		$(".dedishield-tab:nth-child(6) .security-text").css("color", "#fff");
		$(".security-right > *").hide();
		$(".security-details:nth-child(10)").fadeIn("fast");
	});
	$(".dedipack-features-button").click(function() {
		$('html, body').animate({
			scrollTop: $(".dedipack-row-1").offset().top - 60
		}, 500);
	});
	$(".dedipack-security-button").click(function() {
		$('html, body').animate({
			scrollTop: $(".dedipack-row-6").offset().top - 60
		}, 1000);
	});
	var images = [];
	function preload() {
		for (var i = 0; i < arguments.length; i++) {
			images[i] = new Image();
			images[i].src = preload.arguments[i];
		}
	}
	preload(
		"../img/dedipack-server.png",
		"../img/smoke1.png"
	)
});