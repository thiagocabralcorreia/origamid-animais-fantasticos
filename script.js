const animais = document.getElementById('animais');
console.log(animais);

const copy = document.getElementsByClassName('copy');
console.log(copy);

const ultimoItem = document.querySelector('#contato');
console.log(ultimoItem);

const list = document.querySelectorAll('li');
console.log(list)

const paragrafos = document.querySelectorAll('p'); //25 itens 'p'
console.log(paragrafos)

paragrafos.forEach((item) => {
    console.log(item);
})
