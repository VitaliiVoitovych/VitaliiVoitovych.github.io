const header = document.querySelector('.header');
var scrolledTop
window.addEventListener('scroll', function(){
	scrolledTop = pageYOffset;
	if (scrolledTop <= 60 && scrolledTop >= 0) {
		header.classList.remove('header_shadow')
	}
	else{
		header.classList.add('header_shadow')
	}
	console.log(scrolledTop)
});
