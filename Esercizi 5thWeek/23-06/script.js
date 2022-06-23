let big = document.getElementById('big');
let colors = document.getElementById('colors');
let upper = document.getElementById('upper');
let hide = document.getElementById('hide');
let show = document.getElementById('show');
let h1 = document.querySelector('h1');

big.addEventListener('click', () => {
    h1.classList.toggle('size');
});

colors.addEventListener('click', () => {
    h1.classList.toggle('colors');
});

upper.addEventListener('click', () => {
    h1.classList.toggle('uppers');
});

hide.addEventListener('click', () => {
    h1.style.display = 'none';
});

show.addEventListener('click', () => {
    h1.style.display = 'block';
});

// LISTA IMPEGNI 

let lista = document.querySelectorAll('.qualcosa'); 
console.log(lista);

lista.forEach(element => {
    element.addEventListener('click', () => {
        element.style.textDecoration = 'line-through';
        element.style.color = 'grey';
    })
})
// Pulsante NavBar

let navbar = document.querySelector('#navbar');

navbar.addEventListener('click', () => {
    let just = document.querySelector('.zio');
    console.log('just');
    just.classList.toggle('pera');
});
