var today = new Date();
var year = today.getFullYear();

var el = document.querySelector('.copyright');
el.innerHTML = '<span>Vitalii Voitovych &copy;' + year + '</span>';
