var giocatore1 = document.querySelector('#giocatore1'), giocatore2 = document.querySelector('#giocatore2'), numeroEstratto = document.querySelector('#numero-estratto'), risultato = document.querySelector('#risultato'), estrai = document.querySelector('#estrai');
estrai.addEventListener('click', estraiNumero);
function estraiNumero() {
    var resultG1 = Math.floor(Math.random() * 99 + 1), resultG2 = Math.floor(Math.random() * 99 + 1);
    giocatore1.innerHTML = resultG1.toString();
    giocatore2.innerHTML = resultG2.toString();
    var numero = Math.floor(Math.random() * 99 + 1);
    numeroEstratto.innerHTML = numero.toString();
    if (resultG1 == numero && resultG2 == numero) {
        risultato.innerHTML = "HANNO VINTO ENTRAMBI // MONTEPREMI DIVISO 2";
    }
    else if (resultG1 == numero) {
        risultato.innerHTML = "Il giocatore 1 ha vinto il montepremi!";
    }
    else if (resultG2 == numero) {
        risultato.innerHTML = "Il giocatore 2 ha vinto il montepremi!";
    }
    else {
        risultato.innerHTML = determina(resultG1, resultG2, numero);
    }

}
function determina(primoNumero, secondoNumero, numeroTarget) {
    var giocatore1Result = Math.abs(numeroTarget - primoNumero);
    console.log(giocatore1Result);
    var giocatore2Result = Math.abs(numeroTarget - secondoNumero);
    console.log(giocatore2Result);
    if (giocatore1Result == giocatore2Result) {
        return "Nessuno ha vinto, c'è un pareggio!!!";
    }
    if (giocatore1Result < giocatore2Result) {
        return "Nessuno ha vinto, ma...Il giocatore 1 si è avvicinato di più al numero!";
    }
    else {
        return "Nessuna ha vinto, ma...Il giocatore 2 si è avvicinato di più al numero!";
    }
}
/* NANI */
/* function gamePlay() {
    let randomNumber: number = Math.floor(Math.random() * 99 + 1);
    let playerOneNumber = document.getElementById('p1n')!.value
    let playerTwoNumber = document.getElementById('p2n')!.value
    console.log(playerOneNumber,playerTwoNumber)

    let playerOneResult: number = randomNumber - playerOneNumber
    let playerTwoResult: number = randomNumber - playerTwoNumber
    playerOneResult = playerOneResult * playerOneResult
    playerTwoResult = playerTwoResult * playerTwoResult

    if (playerTwoNumber == randomNumber) {
        alert('2 ha vinto' + randomNumber);
    } else if (playerOneNumber == randomNumber) {
        alert('1 ha vinto' + randomNumber);
    } else if (playerOneResult > playerTwoResult && playerTwoNumber != randomNumber) {
        alert('2 si è avvicinato di più' + randomNumber);

    } else if (playerOneResult < playerTwoResult && playerOneNumber != randomNumber) {
        alert('1 si è avvicinato di più' + randomNumber);
    } else {
        alert('1 e 2 hanno stranamente pareggiato' + randomNumber);
    }
}
document.querySelector('#playBtn')!.addEventListener('click', gamePlay); */