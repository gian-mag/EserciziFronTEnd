let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/

let arrayComparison = []; // comparatore di due elementi attualmente vuoto

document.body.onload = startGame();

// mi serviranno alcune variabili 1. interval 2. una agganciata alla classe find 
var interval;
let iconsFind = document.getElementsByClassName("find");

// 3. una agganciata al'id modal 4. una agganciata alla classe timer
let modal = document.getElementById('modal');
var timer = document.querySelector(".timer");

//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
    var currentIndex = a.length;        // lunghezza dell'array che richiami come paramentro
    var temporaryValue, randomIndex;    // due variabili di confronto

    while (currentIndex !== 0) {        // fino a quando la lunghezza dell'array richiamato non è 0
        randomIndex = Math.floor(Math.random() * currentIndex); //lunghezza dell'array di partenza
        currentIndex -= 1;  //diminuisce l'indice dell'array di base di 1 (esclude l'ultimo elemento già preso)
        temporaryValue = a[currentIndex];   // setta la variabile temporenea come l'array che ha 1 elemento in meno
        a[currentIndex] = a[randomIndex];   // all'array con l'elemento in meno, viene assegnata lo stesso array che ha il math.floor come index
        a[randomIndex] = temporaryValue;    // glielo riassegna all'array temporaneo
    }
    return a;
}

// una funzione che rimuove la classe active e chiama la funzione startGame()
function playAgain() {
    modal.classList.remove("active");
    startGame();
}

function startGame() {
    // qui pulisce il timer
    clearInterval(interval);
    // dichiara un array vuoto
    arrayConfronto = [];
    // mescola casualmente l'array degli animali (var arrayShuffle = shuffle(arrayAnimali);)
    var arrayShuffle = shuffle(arrayAnimali);
    // aggancia il contenitore con id griglia
    var lista = document.getElementById('griglia');
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    // poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
    for (var i = 0; i < 24; i++) {
        var box = document.createElement('div');
        var element = document.createElement('div');
        element.className = 'icon';
        document.getElementById('griglia').appendChild(box).appendChild(element);
        element.innerHTML = arrayShuffle[i];
    }

    // chiama la funzione timer 
    startTimer();
    //e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definite sotto (ripreso da sotto per coerenza, avrei usato un querySelectorAll oppure un Array.from per trasformarlo da HTMLCollection)
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    for (var i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", displayIcon);
        icons[i].addEventListener("click", openModal);
    }
}

function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    console.log(icon);
    var icons = [...icon]; 
    console.log(icons);                                                // Non ho ben capito il senso dell'array come argomento completo, avrei preferito usare un selettore diverso, ma significava cambiare tutte le funzioni già date
    //mette/toglie la classe show
    this.classList.toggle("show");
    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);
    /*                                                                     
    var icon = document.getElementsByClassName("icon");                     // Non ho ben capito il senso dello spread
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}


function openModal() {
    if (iconsFind.length == 24) {
        clearInterval(interval);
        modal.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
        closeModal();
    }
}
// questo nasconde alla fine e riavvia il gioco
function closeModal() {
    closeicon.addEventListener("click", function(e) {
        modal.classList.remove("active");
        startGame();
    });
}

// questa funzione calcola il tempo e aggiorna il contenitore sotto
function startTimer() {

    var s = 0, m = 0;

    interval = setInterval(function() {
        timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
    }, 1000);
}