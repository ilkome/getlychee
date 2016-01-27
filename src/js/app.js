"use strict";

$(function() {
	
	// Popup fade up
	// ===============================================
	var popupFadeUp = function() {
		var $popup = $(".js-popup"),
			headerHeight = $(".header").height();

		if ( $(window).scrollTop() >= headerHeight && !$popup.hasClass("popup-wasClose") ) {
			$popup.addClass("popup-fadeUp");
		}
	}
	popupFadeUp();


	// Popup close
	// ===============================================
	var popupClose = function() {
		var $popup = $(".js-popup"),
			$popupCloseLink = $(".js-popup-close");

		$popupCloseLink.on("click", function(e){
			e.preventDefault();
			$popup.addClass("popup-wasClose")
			$popup.removeClass("popup-fadeUp");
		});
	}
	popupClose();


	$(".js-writer").typed({
		strings: ["Line of code.<br>The Masterminds of Lychee have been educated at some of the..."],
		startDelay: 2000,
		typeSpeed: 0,
		loop: 1,
		showCursor: 0
	});


	// Scroll event
	// ===============================================
	 $(window).on('scroll', function() {
		popupFadeUp();
	});
});