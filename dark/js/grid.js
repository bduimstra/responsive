(function($) {
	$('header span').on('click', function() {
		$('header span, main, nav').toggleClass('nav-visible');

		if ($('header span').hasClass('nav-visible')) {
			$('main').on('click', function() {
				$('header span, main, nav').removeClass('nav-visible');
			});
		}
	});

	$('body').removeClass('preload');
})(jQuery);