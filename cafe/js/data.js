var today = new Date();
var year = today.getFullYear();

var el = document.querySelector('.copyright');
el.innerHTML = '<p>Vitalii Voitovych &copy;' + year + '</p>';