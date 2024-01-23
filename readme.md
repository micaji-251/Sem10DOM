# DOM - Document Object Modem

Nos ayuda a entender todo lo que el usuario puede visualizar, lo renderizado.


// console.log('Hola mundo');

// let documento = document;

// console.log(document);

// console.log(document.head);

// console.log(document.body);

// console.log(document.domain);

## Agarra un selector

### Get element by id

// Get element by Id para seleccionar un elemento unico.

const message = document.getElementById('message');

console.log(message);


### QuearySelector

// Queary selector (selectores - Devuelve un solo elemento), permite sugetar por id o clase.


const message2 = document.querySelector('.parrafo');
const message3 = document.querySelector('#message');

console.log(message2);


const linkMessage = document.querySelector('.NavBar li a');

console.log(linkMessage);

### Queary Selector All

const linkMessage2 = document.querySelectorAll('.NavBar li a');

console.log(linkMessage2);


## Nodos

Todo elemento HTML es un nodo, pero no todo nodo es un elemento HTML

### Nodo de elemento (p o a los selectores)

### Nodo de atributo (clase o id)

### Nodo de Texto (contenido)


## Modificaciones desde JAvascript

const message = document.getElementById('message');

console.log(message.textContent);

message.textContent = 'Soy un mensaje cambiado desde Javascript';

console.log(message.textContent);

console.log(message);

message.style.color = 'red';
message.style.margin = '0';
message.style.textTransform = 'uppercase';



<!-- Ejercicio en clase -->

// Pintar de color rojo todos los enlaces del menu

link = document.querySelectorAll('.NavBar li a')

console.log(link);


// link.forEach( linka =>{
//     linka.style.color = 'red';
// });

// for (const linka of link){
//     linka.style.color='red';
// };

console.log(linkarray);

const linkarray = Array.from(document.querySelectorAll('.NavBar li a'));

for (i=0;i>=linkarray.length-1;i++) {
linkarray[i].style.color = 'red';
}

## MOVERSE POR JAVASCRIPT

// Darle estilos al padre del li a Inicio

const linkElement = document.querySelector('.link')

console.log(linkElement.parentElement.parentElement);

parentlink = linkElement.parentElement.parentElement;

parentlink.style.backgroundColor = 'red';

console.log(linkElement.parentElement.nextElementSibling.nextElementSibling);


## APPEND CHILD agregar un elemento e INNER CHILD

const divElement = document.createElement('div');
const container = document.getElementById('contenedor');

console.log(divElement);

divElement.textContent = 'Soy un elemento creado por javascript';

container.appendChild(divElement);

console.log(divElement.innerHTML);
// El innerHTML permite agregar elementos dentro del contenido

divElement.innerHTML = '<p>Hola como estan</p>'

console.log(divElement);
// Para agregar un elemento al HTML siempre tiene que agarrarse de algo