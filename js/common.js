$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".toggle_menu").slideToggle();
		return false;
	});


	function search_form() {
		$(".icon_search").click(function() {
			$(".search_form").show();
			return false;
		});
		$(".search_form .close_search_form").click(function() {
			$(".search_form").hide();
			return false;
		});
	};



	$(".mouse-icon").click(function(){
		$("html, body").animate({
			scrollTop : $(".f_art").offset().top
		},800);
	});

	var owl = $(".s_news_wrapper");
	var options = {
		margin:0,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			992:{
				items:3
			}
		}
	};
	owl.owlCarousel(options);
	if ($(window).width() > 768){
		owl.addClass('owl-carousel');
		owl.owlCarousel(options);
		$(".search_form").hide();
	} else {
		owl.trigger('destroy.owl.carousel');
		owl.removeClass('owl-carousel');
	};



	function heightsets(){
		$(".s_adv_item").height("auto").equalHeights();
		$(".s_news_content").height("auto").equalHeights();
	};
	heightsets();

	if ($(window).width() <= 768){
		$('h2 br').remove();
		search_form();
	};

	$(window).resize(function() {
		if ($(window).width() <= 768) {
			$('h2 br').remove();
			search_form();
		};
		if ($(window).width() > 768){
			owl.addClass('owl-carousel');
			owl.owlCarousel(options);
			$(".search_form").hide();
		} else {
			owl.trigger('destroy.owl.carousel');
			owl.removeClass('owl-carousel');
		};
		heightsets();
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


});