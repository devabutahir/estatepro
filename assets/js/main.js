"user strict";

/* ---
	0.1 - Sticky Header	
	0.2 - Preloader
	0.3 - Scroll To Top
	0.4 - Menu Top Fixed
	0.5 - Scroll To
	0.6 - Owl Carousel
	0.7 - Tabbing
	0.8 - Counter
	0.9 - Magnific Popup
	10.0 - WOW
	11.0 - Google Map
	12.0 - Custom Popup
	13.0 - Custom Search
	14.0 - Custom Progress Bar
---*/

$(document).ready(function () {

/*-------- Owl Carousel Slider start--------*/
	$(".tweet-slider").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".feature-wrapper").owlCarousel({
		loop: true,
		margin:15,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: false,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".listign-wrapper").owlCarousel({
		loop: true,
		margin:15,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: false,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			767: {
				items: 3,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 4,
			},
			1399: {
				items: 5,
			},
		},
	});
	$(".cities-wrapper").owlCarousel({
		loop: true,
		margin:15,
		smartSpeed: 1000,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: false,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 4,
			},
			1399: {
				items: 4,
			},
		},
	});
	$(".team-wrapper").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 2000,
		autoplayTimeout: 2500,
		autoplay: true,
		nav: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".test-button-wrapper").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 1500,
		autoplayTimeout: 2000,
		autoplay: false,
		nav: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 4,
			},
		},
	});
	$(".testimonial-wrapper").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 1500,
		autoplayTimeout: 2000,
		autoplay: false,
		nav: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 4,
			},
		},
	});
	$(".client__sale").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 1500,
		autoplayTimeout: 2000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	
	
/*-------- Owl Carousel Slider End--------*/

/*-------- Search Open start--------*/
	$('.open_search').on('click', function(event){
		event.stopPropagation();
	  
		$('.search_block').toggleClass('visible');
		$('.search_block .search_input').focus();
	  });
	  $('body').on('click', function(){
		$('.search_block').removeClass('visible');
	  });
	  $('.search_box').on('click', function(event){
		event.stopPropagation();
	  });
	  $('.search_input').on('keyup', function(event){
		if($(this).val() !== ''){
		  $(this).addClass('typing');
		} else {
		  $(this).removeClass('typing');
		}
	  });
/*-------- Search Open End--------*/

/*-------- Mobile Menu Start--------*/
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
/*-------- Mobile Menu End--------*/

/*-------- Menu Top Fixed Start--------*/
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
/*-------- Menu Top Fixed End--------*/

/*-------- Odometer Counter Start--------*/
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
/*-------- Odometer Counter End--------*/

/*-------- Wow Animation Start--------*/
	new WOW().init();
/*-------- Wow Animation End--------*/

/*-------- Top Bottom Scrool Start--------*/
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById("progress");
		let progressValue = document.getElementById("valu");
		let pos = document.documentElement.scrollTop;
		let calcHeight =
		document.documentElement.scrollHeight - 
		document.documentElement.clientHeight;
		let scrollValue = Math.round((pos * 250) / calcHeight);
		
		if (pos > 250){
			scrollProgress.style.display = "grid";
		} else{
			scrollProgress.style.display = "none";
		}
		scrollProgress.addEventListener("click", () => {
			document.documentElement.scrollTop = 0;
		}); 
	};
	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;
/*-------- Top Bottom Scrool End--------*/


/*-------- Swipper Slider Start--------*/
	var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
		nav: true,
        watchSlidesProgress: true,
		loop: true,
	});
	var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
	});
/*-------- Swipper Slider End--------*/

/*-------- Progress Bar Start--------*/
	$(function(){
		$('svg.radial-progress').each(function( index, value ) { 
			$(this).find($('circle.complete')).removeAttr( 'style' );
		});
		$(window).scroll(function(){
			$('svg.radial-progress').each(function( index, value ) { 
				// If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
				if ( 
					$(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
					$(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
				) {
					// Get percentage of progress
					percent = $(value).data('percentage');
					// Get radius of the svg's circle.complete
					radius = $(this).find($('circle.complete')).attr('r');
					// Get circumference (2πr)
					circumference = 2 * Math.PI * radius;
					// Get stroke-dashoffset value based on the percentage of the circumference
					strokeDashOffset = circumference - ((percent * circumference) / 100);
					// Transition progress for 1.25 seconds
					$(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
				}
			});
		}).trigger('scroll');
	});
/*-------- Progress Bar End--------*/	

/*-------- Tabbing Start--------*/
	const tabBtns = document.querySelectorAll(".tabs__btn");
	const tabPanes = document.getElementsByClassName("tabs__pane");
	let fadeTime = 200;
	function fadeOut(target) {
		target.style.opacity = 1;
		target.style.transition = `opacity ${fadeTime}ms`;
		target.style.opacity = 0;
		setTimeout(() => {
			target.style.display = "none";
		}, fadeTime);
	}
	function fadeIn(target) {
		target.style.opacity = 0;
		target.style.transition = `opacity ${fadeTime}ms`;
		target.style.opacity = 1;
		setTimeout(() => {
			target.style.display = "block";
		}, fadeTime);
	}
	function triggerTab(elt) {
		elt.preventDefault();

		tabBtns.forEach((btn) => {
			btn.classList.remove("is-active");
			btn.setAttribute("aria-selected", false);
		});

		[].forEach.call(tabPanes, (pane) => {
			fadeOut(pane);
		});

		elt.target.classList.add("is-active");
		elt.target.setAttribute("aria-selected", true);
		let clickedTab = elt.target.dataset.tabTarget;
		fadeIn(document.querySelector(`#${clickedTab}`));
	}
	tabBtns.forEach((tab) => {
		tab.addEventListener("click", triggerTab);
	});
/*-------- Tabbing End--------*/

/*-------- Magnific Popup Start--------*/
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});
/*-------- Magnific Popup Start--------*/

});

/*-------- Preloader Start--------*/
$(window).on('load', function () {
	$("#cover").fadeOut(800);
});
/*-------- Preloader End--------*/