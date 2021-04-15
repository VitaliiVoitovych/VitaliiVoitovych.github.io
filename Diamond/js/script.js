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
function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop - 100,
		behavior: 'smooth'
	})
}
const home_btn = document.querySelector('.home_btn');
const about_us__btn = document.querySelector('.about-us__btn');
const info_block__btn = document.querySelector('.info-block__btn')
const contact__btn = document.querySelector('.contact__btn');

const about_us = document.querySelector('.about-us');
const home = document.querySelector('.header');
const info_block = document.querySelector('.info-block');
const contact = document.querySelector('.contact');
home_btn.addEventListener('click', () => {
	scrollTo(home);
})
about_us__btn.addEventListener('click', () => {
	scrollTo(about_us);
})
info_block__btn.addEventListener('click', () => {
	scrollTo(info_block);
})
contact__btn.addEventListener('click', () => {
	scrollTo(contact);
})


var today = new Date();
var year = today.getFullYear()

var el = document.querySelector('.footer__copyright');
el.innerHTML = '<span class="footer__title title">Vitalii Voitovych &copy;' + year + '</span>';