//header shadow
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
//btn anim
const button = document.querySelector(".header__btn");
const menu = document.querySelector(".header__menu");

button.onclick = func;

function func(){
	menu.classList.toggle('active-menu');
	menu.classList.toggle('deactive-menu');
	button.classList.toggle('active-btn');
}
//accordion anim
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
// smooth scroll to block
function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop - 100,
		behavior: 'smooth'
	})
}
let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
	if (anchor) {
		anchor.addEventListener('click', function(e){
			e.preventDefault();
			anchorId = this.getAttribute('href');
			var block = document.querySelector(anchorId)
			scrollTo(block)
		})
	}
}
//footer date
var today = new Date();
var year = today.getFullYear()

var el = document.querySelector('.footer__copyright');
el.innerHTML = '<span class="footer__title title">Vitalii Voitovych &copy;' + year + '</span>';