function clicca(numero) {
    document.getElementById("opera").value += numero; // stampa un value in "opera" assegnando il numero dentro al value del pulsante e ogni volta assegna e aggiunge il valore di un altro pulsante
}


function cancella() {
    const elimina = "";
    document.getElementById("opera").value = elimina; // stampa un value in "opera" e gli assegna una stringa
}

function operazione() {
    var operatori = eval(document.getElementById("opera").value);
    if (operatori == undefined) {
        document.getElementById("opera").value = 0;
    } else { 
        return document.getElementById("opera").value = operatori;
    } 
}
/* volevo togliere il valore undefined quando lo "schermino" era vuoto, non sapendo come fare ho letto come fare un semplice if else (non in programma) per dire che se la var operatori leggeva undefined a schermo, mi cambiava il valore di default in 0, altrimenti mi leggeva la stringa e la convertiva autonomamente in operazione e leggeva il risultato*/

/* Inizialmente la mia funzione era così
    function operazione() {
        var operatori = eval(document.getElementById("opera").value);
        document.getElementById("opera").value = operatori;
*/