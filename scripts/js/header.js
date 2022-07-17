function getDocHeight() {
    var e = document;
    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
}

function preload(e) {
    $(e).each(function() {
        $("<img/>")[0].src = this
    })
}
$(window).scroll(function() {
    $(this).scrollTop() > 1 ? ($(".header").addClass("sticky"), $(".selections-cover").css("margin-top", "61px"), $("#changeLogo").attr("src", "/img/longheader.png")) : ($(".header").removeClass("sticky"), $(".selections-cover").css("margin-top", "126px"), $("#changeLogo").attr("src", "/img/longheader.png"))
}), $(window).scroll(function() {
    $(window).scrollTop() + $(window).height() == getDocHeight() ? $(".up img").show() : $(".up img").hide()
}), preload(["/img/longheader.png", "/img/longheader.png"]), $(document).ready(function() {
    $(".tab-2-text").click(function() {
        "none" === $(".selections-1").css("display") ? ($(".selections-1").css("display", "inline"), $(".tab-2").css("background-color", "#efefef"), $(".tab-2-text").css("color", "#050505"), $(".tab-sel").css("color", "#050505")) : ($(".selections-1").css("display", "none"), $(".tab-2").css("background-color", "transparent"), $(".tab-2-text").css("color", "#D0DCE0"), $(".tab-sel").css("color", "#fff"))
    })
}), $(document).ready(function() {
    $("html").click(function() {
        $(".tab-2").is(":hover") || $(".selections-1").is(":hover") || ($(".selections-1").css("display", "none"), $(".tab-2").css("background-color", "transparent"), $(".tab-2-text").css("color", "#D0DCE0"))
    })
}), $(document).ready(function() {
    $(".tab-3-text").click(function() {
        "none" === $(".selections-2").css("display") ? ($(".selections-2").css("display", "inline"), $(".tab-3").css("background-color", "#efefef"), $(".tab-3-text").css("color", "#050505"), $(".tab-sel").css("color", "#050505")) : ($(".selections-2").css("display", "none"), $(".tab-3").css("background-color", "transparent"), $(".tab-3-text").css("color", "#D0DCE0"), $(".tab-sel").css("color", "#fff"))
    })
}), $(document).ready(function() {
    $("html").click(function() {
        $(".tab-3").is(":hover") || $(".selections-2").is(":hover") || ($(".selections-2").css("display", "none"), $(".tab-3").css("background-color", "transparent"), $(".tab-3-text").css("color", "#D0DCE0"))
    })
}), $(document).ready(function() {
    $(".tab-4-text").click(function() {
        "none" === $(".selections-3").css("display") ? ($(".selections-3").css("display", "inline"), $(".tab-4").css("background-color", "#efefef"), $(".tab-4-text").css("color", "#050505"), $(".tab-sel").css("color", "#050505")) : ($(".selections-3").css("display", "none"), $(".tab-4").css("background-color", "transparent"), $(".tab-4-text").css("color", "#D0DCE0"), $(".tab-sel").css("color", "#fff"))
    })
}), $(document).ready(function() {
    $("html").click(function() {
        $(".tab-4").is(":hover") || $(".selections-3").is(":hover") || ($(".selections-3").css("display", "none"), $(".tab-4").css("background-color", "transparent"), $(".tab-4-text").css("color", "#D0DCE0"))
    })
}), $(document).ready(function() {
    $(".tab-5-text").click(function() {
        "none" === $(".selections-4").css("display") ? ($(".selections-4").css("display", "inline"), $(".tab-5").css("background-color", "#efefef"), $(".tab-5-text").css("color", "#050505"), $(".tab-sel").css("color", "#050505")) : ($(".selections-4").css("display", "none"), $(".tab-5").css("background-color", "transparent"), $(".tab-5-text").css("color", "#D0DCE0"), $(".tab-sel").css("color", "#fff"))
    })
}), $(document).ready(function() {
    $("html").click(function() {
        $(".tab-5").is(":hover") || $(".selections-4").is(":hover") || ($(".selections-4").css("display", "none"), $(".tab-5").css("background-color", "transparent"), $(".tab-5-text").css("color", "#D0DCE0"))
    })
}), $(document).ready(function() {
    $(".up img").click(function() {
        $("html, body").animate({
            scrollTop: $("body").offset().top
        }, 500)
    })
}), $(document).ready(function() {
    var e = window.location.pathname;
    e.indexOf("meet-the-team") > -1 && ($(".tab-3-text").addClass("selected"), $(".selbox-5").addClass("selected"))
}), $(document).ready(function() {
    var e = window.location.pathname;
    e.indexOf("about-us") > -1 && ($(".tab-3-text").addClass("selected"), $(".selbox-6").addClass("selected"))
}), $(document).ready(function() {
    var e = window.location.pathname;
    e.indexOf("client-area/serverstatus.php") > -1 && ($(".tab-4-text").addClass("selected"), $(".selbox-13").addClass("selected"), $(".selbox-17").removeClass("selected"), $(".tab-5-text").removeClass("selected"))
}), $(document).ready(function() {
    var e = window.location.pathname;
    e.indexOf("partners") > -1 && ($(".tab-3-text").addClass("selected"), $(".selbox-10").addClass("selected"))
}), $(document).ready(function() {
    "/" == window.location.pathname && $(".tab-1-text").addClass("selected")
}), $(document).ready(function() {
	$(".coupon img").click(function() {
		$(".coupon").css("margin-left", "-250px");
	});
	$(".greetings-box-1").click(function() {
		$('html, body').animate({
			scrollTop: $(".greetings-learn-more").offset().top - 60
		}, 500);
	});
	$(".greetings-box-2").click(function() {
		$('html, body').animate({
			scrollTop: $(".greetings-path").offset().top - 60
		}, 1000);
	});
});