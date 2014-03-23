window.onload = function() {
	var _loader,
		_navBtn = document.querySelector("header span"),
		_nav = document.querySelector("body > nav"),
		_main = document.querySelector("main"),
		_navSelectors = [];

	_navSelectors.push(_navBtn, _nav, _main);

	// Toggle left nav and animate all neccessary components
	function _toggleNav() {
		var _className = "nav-visible";

		if (_navBtn.className === "nav-visible") _className = "";

		for (var i = 0; i < _navSelectors.length; i++) {
			_navSelectors[i].className = _className;
		}
	}

	// Get it started!
	function _init() {
		_navBtn.addEventListener("click", _toggleNav);
	}

	_init();

	// Remove preload class to start CSS transitions
	_loader = setTimeout(function() {
		document.body.className = "";
	}, 10);
};