/* Classe persona */
let d = new Date();

function Persona(nome, cognome, data) {
    this.nome = nome;
    this.cognome = cognome;
    this.data = new Date(data);
    /* GetAge */
    this.getAge = function () {
        /* birthday = document.getElementById("nomeData") */
        var years = (d.getFullYear() - this.data.getFullYear());
        if (d.getMonth() < this.data.getMonth() ||
            d.getMonth() == this.data.getMonth() && d.getDate() < this.data.getDate()) {
            years--;
        }
        return years;
    }
    /* GetName */
    this.getName = function () {
        return this.nome + " " + this.cognome;
    }
}

/* let Pippo = new Persona("Pippo", "Strong", "07/04/2014");
console.log(Pippo.getAge());

let Strong = new Persona("Strong", "Pippos", "07/05/2014");  
console.log(Strong.getAge()); */


/* Crea Tabella */
let table = document.createElement("table");
var usersList = [];
i = 0;

/* var trow = document.createElement('tr');
var td = document.createElement('td');
var tData = document.createElement('td'); */

var trowList = [];


/* event listener */

document.addEventListener('submit', function (event) {
    event.preventDefault();
   
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let data = document.getElementById('nomeData').value;
     /* let x = new Persona(nome, cognome, data) */
    usersList.push(new Persona(nome, cognome, data));
    console.log(usersList[i]);

    
    let trow = document.createElement('tr');
    let td = document.createElement('td');
    let tData = document.createElement('td');

    var tdContent = document.createTextNode(usersList[i].getName());
    td.append(tdContent);
    var tdEta = document.createTextNode(usersList[i].getAge());
    tData.append(tdEta);
    trow.append(td);
    trow.append(tData);

    document.getElementById('utenti').append(trow);

    trowList.push(trow);

    i++;
})

/* Remove child */

let btn = document.getElementById('rimuovi');

btn.addEventListener('click', () => {

    document.querySelector('table > tr:last-of-type').remove();
    /* console.log(ultimoElemento); */
    usersList.pop();
    /* document.getElementById('utenti').removeChild(ultimoElemento); */

    i--;
})