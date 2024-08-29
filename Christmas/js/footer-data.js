var today = new Date();
var year = today.getFullYear()

var el = document.querySelector('.footer__copyright');
el.innerHTML = '<span class="footer__title title">Vitalii Voitovych &copy;' + year + '</span>';
