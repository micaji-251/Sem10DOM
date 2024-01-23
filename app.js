divElement = document.createElement('div');

divElement.innerHTML = '<p>Boton presionado</p>' ;
divElement.backgroundcolor= 'red';

ElementAppend = document.getElementById('toappend');

function myfunction() {
    ElementAppend.appendChild(divElement);
}
