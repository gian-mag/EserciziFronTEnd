// voglio un timer che
// passa in un funzione, che dirà:
// SE i minuti che passano sono < 1, mi ritorna solo lo scatto alla risposta
// altrimenti mi ritorna lo scatto alla risposta + il costo della chiamata * numero dei minuti
// mi ritorna un valore (in euro)


class Timer {
    interval: number;
    timer: HTMLDivElement;
    s: number;
    m: number;
    constructor(selector: string) {
        this.interval = 0;
        this.timer = (document.querySelector(".timerShow") as HTMLDivElement);
    }
    startTimer(){
        this.s = 0;
        this.m = 0;
        this.interval = setInterval(function () {
            this.timer.innerHTML = "Tempo trascorso: " + this.s + " secondi" + this.m + " minuti";
            console.log(this.timer)
            this.s++;
            if (this.s == 60) {
                this.m++;
                this.s = 0;
            }
        }, 1000)
    }
    
    closeTimer() {
        clearInterval(this.interval);
        return this.m;
    }
}



/* CreaRiga */
function creaCard(conto:number, numero:number, timer: Timer, id: string) {
    let container = document.querySelector(".container");
    let card = document.createElement("div");
    card.classList.add("card");
    let cardIcon = document.createElement("div");
    cardIcon.innerHTML = `<ion-icon name="person-outline"></ion-icon>`;
    cardIcon.classList.add("icon");
    let cardContent = document.createElement("div");
    let cardButton = document.createElement("div");
    cardButton.classList.add("cardButton");
    let ricarica = document.createElement("button");
    ricarica.innerHTML = "Ricarica";
    let chiama = document.createElement("button");
    chiama.innerHTML = "Chiama";
    let chiudi = document.createElement("button");
    chiudi.innerHTML = "Stop";
    cardContent.innerHTML = `<h2>User</h2><p>Saldo Conto: ${conto}</p><p>Numero Chiamate: ${numero}</p>`;
    cardContent.classList.add("content");
    let cardInput = document.createElement("input");
    let cardTimer = (document.createElement("div") as HTMLDivElement);
    cardInput.classList.add("show");
    cardTimer.classList.add("timerShow");
    cardTimer.id = id;
    cardButton.append(ricarica, chiama, chiudi);
    cardContent.append(cardButton, cardInput, cardTimer);
    card.append(cardIcon);
    card.append(cardContent);
    container?.append(card);
    console.log(timer)
    /* Bottone ricarica */
    ricarica.addEventListener("click", () => {
        cardInput.classList.toggle("active")
    });

    /* Bottone Chiama */
    chiama.addEventListener("click", () => {    
        cardTimer.classList.add("active");
        timer.startTimer;
        console.log(timer.timer.innerHTML)
    })

    /* Bottone Stop */
    chiama.addEventListener("click", () => {
        cardTimer.classList.remove("active");
        timer.closeTimer;
    })
}


// interfaccia smartphone
interface Smartphone {
    carica: number;
    numeroChiamate: number;
    scattoAllaRiposta: number
    ricarica(unaRicarica: number ): void; //public
    chiamata(minutiDurata: number): void;   //public
    numero404(): number;  /* toFixed(2) */  //public
    getNumeroChiamate(): number; //public
    azzeraChiamate(): void  //public
}


/* PRIMO UTENTE */
class FirstUser implements Smartphone  {
    carica: number;
    numeroChiamate: number;
    scattoAllaRiposta: number = 0.20;
    timer: Timer;
    id: string;
    constructor(carica: number, numeroChiamate: number, selector: string) {
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "1");
    }

    /* METODI */
    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    chiamata(minutiDurata: number): void {
        this.carica = this.carica - (minutiDurata * 0.20)
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}


/* SECONDO UTENTE */
class SecondUser implements Smartphone {
    carica: number;
    numeroChiamate: number;
    scattoAllaRiposta: number = 0.20;
    timer: Timer;
    id: string;
    constructor(carica: number, numeroChiamate: number, selector: string) {
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "2")
    }

    /* METODI */
    ricarica(unaRicarica: number): void {
       this.carica += unaRicarica;
    }

    chiamata(minutiDurata: number): void {
        this.carica = this.carica - (minutiDurata * 0.20)
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
       this.numeroChiamate = 0;
    }
}


/* TERZO UTENTE */
class ThirdUser implements Smartphone {
    carica: number;
    numeroChiamate: number;
    scattoAllaRiposta: number = 0.20;
    timer: Timer;
    id: string;
    constructor(carica: number, numeroChiamate: number, selector: string) {
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "3")
    }

    /* METODI */
    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    chiamata(minutiDurata: number): void {
        this.carica = this.carica - (minutiDurata * 0.20)
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}


/* OPERAZIONI */
let first = new FirstUser( 15, 0, "1");
let second = new SecondUser(15, 0, "2");
let third = new ThirdUser(15, 0, "3");