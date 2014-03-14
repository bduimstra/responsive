$(document).ready(function() {
	function _init() {
		$('.js-nav-btn').on('click', function() {
			$('.js-nav-btn, nav').toggleClass('visible');
		});

		// force redraw for vh and vw units on resize
		$(window).on('resize', function() {
			$('h1, h2, h3, p').css('z-index', '1');
		});

		// resize the splash screen
		$('main').css('height', $(window).height() - 60);
	}

	_init();
});