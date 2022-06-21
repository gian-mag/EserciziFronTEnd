//stringa di partenza

var x = new String("Questa è la mia stringa di partenza");
let Upper = x.toUpperCase();
let Down = x.toLowerCase();
console.log(Upper);
console.log(Down);

// estrapolazione
let estrapola = x.substring(9, 15);
console.log(estrapola);
let estrapola2 = x.slice(16, 23);
console.log(estrapola2);

// concatenazione
const okay = estrapola.concat(" " + estrapola2);
console.log(okay);

// Array di persone
var Arreih = [
    "Sir Andrea Adiener",
    "Lazza-Retti",
    "TommyFrog",
    "Footer Man",
    "Daniel-san"
];
var Follower1 = Arreih [0];
var Follower2 = Arreih [1];
var Follower3 = Arreih [2];
var Follower4 = Arreih [3];
var Follower5 = Arreih [4];
var Follower6 = Arreih [5];
console.log(Follower3);
Arreih.push("Ruben");
document.getElementById("follow1").innerHTML = Follower1;
document.getElementById("follow2").innerHTML = Follower2;
document.getElementById("follow3").innerHTML = Follower3;
document.getElementById("follow4").innerHTML = Follower4;
document.getElementById("follow5").innerHTML = Follower5;
document.getElementById("follow6").innerHTML = "Ruben";
console.log(Arreih);

let Abbonati = Arreih.length;
console.log(Abbonati);

// funzioni di array
function lancio() {
    var num_pc1 = Math.round(Math.random() * 5 + 1);
    var num_pc2 = Math.round(Math.random() * 5 + 1);

    document.getElementById("numero_pc1").innerHTML = "Lancio computer " + num_pc1 + ", ";
    document.getElementById("numero_pc2").innerHTML = num_pc2;
    var totale_pc = num_pc1 + num_pc2;
    document.getElementById("totale_pc").innerHTML = " , con un totale di " + totale_pc + " punti";


    var num_1 = Math.round(Math.random() * 5 + 1);
    var num_2 = Math.round(Math.random() * 5 + 1);

    document.getElementById("numero_1").innerHTML = "Tu hai ottenuto " + num_1 + ", ";
    document.getElementById("numero_2").innerHTML = num_2;
    var totale1 = num_1 + num_2;
    document.getElementById("totale1").innerHTML = " e hai totalizzato " + totale1 + " punti";

    if (totale1 > totale_pc)
        document.getElementById("vinto").innerHTML = "hai vinto";
    else
        document.getElementById("vinto").innerHTML = "hai perso";
}