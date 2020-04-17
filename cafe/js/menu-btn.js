$(document).ready(function() {
	$(".menu-btn").on('click',function(event) {
		event.preventDefault();
		$(".navbar-menu__link").toggleClass('active');
	});
});