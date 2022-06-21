var dataOggi = new Date();
document.getElementById('data').innerHTML = dataOggi;

document.write(dataOggi);
document.write("<br>" + dataOggi.getFullYear());
document.write("<br>" + dataOggi.getMinutes());
document.write("<br>" + dataOggi.getDay());
document.write("<br>" + dataOggi.getMonth() + 1);
document.write("<br>" + dataOggi.getDate());


var dataEuropa = new Date().toLocaleString();
document.write("<br>" + dataEuropa);

var giornoSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

var mese = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

document.write("<br>" + dataOggi.getDate() + " - " + mese[dataOggi.getMonth()] + " - " + dataOggi.getFullYear()); // data europea

document.write("<br>" + "Oggi è " + giornoSettimana[dataOggi.getDay()] + " " + dataOggi.getDate() + " - " + mese[dataOggi.getMonth()] + " - " + dataOggi.getFullYear());




