//////////////////// NAVBAR STICKY ///////////////////

let fratm = document.querySelector("#scroll");              // corrisponde al nostro HEADER

let sorm = document.querySelector('#slider').offsetTop;  // corrisponde all 'inizio della sezione successiva

document.addEventListener("scroll", function(){

    let top = window.pageYOffset;                           // corrisponde all'altezza verticale dello schermo

    if(top > sorm) {                                        // se l'altezza dello schermo arriva all'altezza iniziale dello slider, rendi header sticky 
        fratm.style.position = "sticky";
        fratm.style.top = 0 + "px";
    } else {                                                // altrimenti rendi header relative FRTATM SORM BUKKINE |Adiener
        fratm.style.position = "relative";
        fratm.style.top = -65 + "px"; 
    }
}) 


//FINE BLOCCO //////////////////

////////////////////////// FUNZIONE SLIDE //////////////////////////

let freccia = document.querySelector('#freccia');

freccia.addEventListener('click',function(){

    let sliderWrap = document.querySelector('#slider-wrap');
    let slideWidth = document.querySelector('.slide').offsetWidth;

    const distance = slideWidth;

    let left = sliderWrap.getAttribute('data-left') - distance;


    if(Math.abs(left) >= (slideWidth * 8)){ // VIVA MANUEL <3 XOXO
        left = 0;
    } 
    
    sliderWrap.style.marginLeft = left + 'px';
    sliderWrap.setAttribute('data-left', left);

})

//FINE BLOCCO //////////////////////////

///////////////////// FUNZIONALITA' TRE PORCELLINI //////////////////
let primoPallino = document.querySelector('#primoPallino');
let secondoPallino = document.querySelector('#secondoPallino');     // DICHIARAZIONE DELLE VARIABILI
let terzoPallino = document.querySelector('#terzoPallino');

let sliderWrap = document.querySelector('#slider-wrap');
let slider = document.querySelector('.slide').offsetWidth; // questo è lo slider 

primoPallino.addEventListener('click', function(){
    sliderWrap.style.marginLeft = 0 + 'px';
})

secondoPallino.addEventListener('click', function(){
    sliderWrap.style.marginLeft = -800 + 'px';
})

terzoPallino.addEventListener('click', function(){
    sliderWrap.style.marginLeft = -2050 + 'px';
})


//FINE BLOCCO //////////////////////////

///////////////////// FUNZIONALITA' SOTTOLINEATURA DELLE SEZIONI    // PROVO ROBE A CASO | Giandomenico


let altezzaSezione = document.querySelectorAll('.altezza'); // creo array con tutti elementi di classe .altezza
console.log(altezzaSezione);        // leggimi ARRAY | GD
console.log(altezzaSezione.length); // leggimi quanti elementi ci sono nell'array | GD

let lista = document.querySelectorAll('.list'); // lista navbar

console.log(lista);
console.log(lista.length);

document.addEventListener("scroll", function() {
    for (let i = 0; i < altezzaSezione.length; i++) {       // mi torna tutte le altezze | GD
        let scroll = window.pageYOffset;
        let inizioDiv = altezzaSezione[i].offsetTop;
        let altezzaDiv = altezzaSezione[i].offsetHeight;
        console.log(lista[i]);
        if (scroll > inizioDiv && scroll <= inizioDiv + altezzaDiv) {              // aggiungo la classe all'elemento successivo  
            lista[i].classList.add('pushOrange');
        }else {                  // voglio togliere la classe alla section quando supero la sezione
            lista[i].classList.remove('pushOrange');  /// da un errore undefined ma non so perchè, comunque funziona | Giandomenico
        }
    }
})
