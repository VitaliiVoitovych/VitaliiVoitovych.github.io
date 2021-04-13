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
});

document.querySelectorAll('.accordion__trigger').forEach((item) => 
	item.addEventListener('click', () => {
		const parent = item.parentNode;
		if(parent.classList.contains('accordion__item_active')){
			parent.classList.remove('accordion__item_active');
		}else{
			document.querySelectorAll('.accordion__item').forEach((child) => 
				child.classList.remove('accordion__item_active'))
			parent.classList.add('accordion__item_active');
		}
	})
)