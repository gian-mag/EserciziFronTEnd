// Esercizio 1

class Person {
    constructor(name, age) {
        this.nome = name;
        this.age = age;
    }

    compareAge(p) {
        if (this.age >= p.age) {
            return `${this.nome} è più grande di ${p.nome}`
        } else {
            return `${this.nome} è più piccolo di ${p.nome}`
        }
    }
}


let p1 = new Person("Tizio", 20);
let p2 = new Person("Caio", 30);
let p3 = new Person("Sempronio", 10);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p3));
console.log(p3.compareAge(p1));











//  Esercizio 2

class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize;

        this.page = 1; // contatore

        this.totPage = Math.ceil(this.items.lenght / this.pageSize);
    }
    next() {
        this.page = this.page < this.totPage ? this.page + 1 : this.totPage;
        this.getVisibleItems()
    };
    prev() {
        this.page = this.page > 1 ? this.page + 1 : 1;
        this.getVisibleItems()
    };
    first() {
        this.page = 1;
        this.getVisibleItems()
    };
    last() {
        this.page = this.totPage;
        this.getVisibleItems()
    };

    getVisibleItems() {
        //prende gli elementi corretti in base alla pagina a cui siamo e li imposta nella tabella
        let lastIndex = this.pageSize;
        let firstIndex = this.pageSize * this.pageSize - this.pageSize;
        let rightItems = this.items.slice(firstIndex, lastIndex);
        let container = document.querySelector("tbody");
        
    };

}


let users = [
    { nome: "Marco", cognome: "Rossi", eta: 20 },
    { nome: "A", cognome: "Rossi", eta: 10 },
    { nome: "B", cognome: "Rossi", eta: 30 },
    { nome: "C", cognome: "Rossi", eta: 40 },
    { nome: "D", cognome: "Rossi", eta: 50 },
    { nome: "E", cognome: "Rossi", eta: 25 },
    { nome: "F", cognome: "Rossi", eta: 32 },
    { nome: "G", cognome: "Rossi", eta: 56 },
    { nome: "H", cognome: "Rossi", eta: 70 },
    { nome: "I", cognome: "Rossi", eta: 80 },
    { nome: "L", cognome: "Rossi", eta: 85 },
]

let p = new Pagination(users, 2);

document.getElementById("nextButton").addEventListener("click", () => {
    p.next();
})
document.getElementById("prevButton").addEventListener("click", () => {
    p.next();
})
document.getElementById("firstButton").addEventListener("click", () => {
    p.next();
})
document.getElementById("lastButton").addEventListener("click", () => {
    p.next();
})