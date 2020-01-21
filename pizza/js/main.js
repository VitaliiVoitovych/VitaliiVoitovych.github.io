$(document).ready(function() {
	$(".menu-btn").on('click',function(event) {
		event.preventDefault();
		$(".menu").toggleClass('active');
		$(this).toggleClass('menu-btn_active');
	});
});