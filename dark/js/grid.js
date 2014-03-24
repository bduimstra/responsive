window.onload = function() {
	var _loader,
		_navBtn = document.querySelector("main > span"),
		_nav = document.querySelector("body nav"),
		_main = document.querySelector("main > section"),
		_navSelectors = [];

	_navSelectors.push(_navBtn, _nav, _main);

	// Toggle left nav and animate all neccessary components
	function toggleNav() {
		var _className = "nav-visible";

		if (_navBtn.className === "nav-visible") _className = "";

		for (var i = 0; i < _navSelectors.length; i++) {
			_navSelectors[i].className = _className;
		}
	}

	function clickMain() {
		if (_main.className === "nav-visible") {
			for (var i = 0; i < _navSelectors.length; i++) {
				_navSelectors[i].className = "";
			}
		}
	}

	function init() {
		// Event handlers
		_navBtn.addEventListener("click", toggleNav);
		_main.addEventListener("click", clickMain);
	}

	// Get it started!
	init();

	// Remove preload class to start CSS transitions
	_loader = setTimeout(function() {
		document.body.className = "";
	}, 10);
};