<<<<<<< HEAD
// voglio un timer che
// passa in un funzione, che dirà:
// SE i minuti che passano sono < 1, mi ritorna solo lo scatto alla risposta
// altrimenti mi ritorna lo scatto alla risposta + il costo della chiamata * numero dei minuti
// mi ritorna un valore (in euro)
var Timer = /** @class */ (function () {
    function Timer(selector) {
        this.interval = 0;
        this.timer = document.querySelector(".timerShow");
    }
    Timer.prototype.startTimer = function () {
        this.s = 0;
        this.m = 0;
        this.interval = setInterval(function () {
            this.timer.innerHTML = "Tempo trascorso: " + this.s + " secondi" + this.m + " minuti";
            console.log(this.timer);
            this.s++;
            if (this.s == 60) {
                this.m++;
                this.s = 0;
            }
        }, 1000);
    };
    Timer.prototype.closeTimer = function () {
        clearInterval(this.interval);
        return this.m;
    };
    return Timer;
}());
/* CreaRiga */
function creaCard(conto, numero, timer, id) {
    var container = document.querySelector(".container");
    var card = document.createElement("div");
    card.classList.add("card");
    var cardIcon = document.createElement("div");
    cardIcon.innerHTML = "<ion-icon name=\"person-outline\"></ion-icon>";
    cardIcon.classList.add("icon");
    var cardContent = document.createElement("div");
    var cardButton = document.createElement("div");
    cardButton.classList.add("cardButton");
    var ricarica = document.createElement("button");
    ricarica.innerHTML = "Ricarica";
    var chiama = document.createElement("button");
    chiama.innerHTML = "Chiama";
    var chiudi = document.createElement("button");
    chiudi.innerHTML = "Stop";
    cardContent.innerHTML = "<h2>User</h2><p>Saldo Conto: ".concat(conto, "</p><p>Numero Chiamate: ").concat(numero, "</p>");
    cardContent.classList.add("content");
    var cardInput = document.createElement("input");
    var cardTimer = document.createElement("div");
    cardInput.classList.add("show");
    cardTimer.classList.add("timerShow");
    cardTimer.id = id;
    cardButton.append(ricarica, chiama, chiudi);
    cardContent.append(cardButton, cardInput, cardTimer);
    card.append(cardIcon);
    card.append(cardContent);
    container === null || container === void 0 ? void 0 : container.append(card);
    console.log(timer);
    /* Bottone ricarica */
    ricarica.addEventListener("click", function () {
        cardInput.classList.toggle("active");
    });
    /* Bottone Chiama */
    chiama.addEventListener("click", function () {
        cardTimer.classList.add("active");
        timer.startTimer;
        console.log(timer.timer.innerHTML);
    });
    /* Bottone Stop */
    chiama.addEventListener("click", function () {
        cardTimer.classList.remove("active");
        timer.closeTimer;
    });
}
/* PRIMO UTENTE */
var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate, selector) {
        this.scattoAllaRiposta = 0.20;
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "1");
    }
    /* METODI */
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
/* SECONDO UTENTE */
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate, selector) {
        this.scattoAllaRiposta = 0.20;
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "2");
    }
    /* METODI */
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
/* TERZO UTENTE */
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate, selector) {
        this.scattoAllaRiposta = 0.20;
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "3");
    }
    /* METODI */
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
/* OPERAZIONI */
var first = new FirstUser(15, 0, "1");
var second = new SecondUser(15, 0, "2");
var third = new ThirdUser(15, 0, "3");
=======
// voglio un timer che
// passa in un funzione, che dirà:
// SE i minuti che passano sono < 1, mi ritorna solo lo scatto alla risposta
// altrimenti mi ritorna lo scatto alla risposta + il costo della chiamata * numero dei minuti
// mi ritorna un valore (in euro)
var Timer = /** @class */ (function () {
    function Timer(selector) {
        this.interval = 0;
        this.timer = document.querySelector(".timerShow");
    }
    Timer.prototype.startTimer = function () {
        this.s = 0;
        this.m = 0;
        this.interval = setInterval(function () {
            this.timer.innerHTML = "Tempo trascorso: " + this.s + " secondi" + this.m + " minuti";
            console.log(this.timer);
            this.s++;
            if (this.s == 60) {
                this.m++;
                this.s = 0;
            }
        }, 1000);
    };
    Timer.prototype.closeTimer = function () {
        clearInterval(this.interval);
        return this.m;
    };
    return Timer;
}());
/* CreaRiga */
function creaCard(conto, numero, timer, id) {
    var container = document.querySelector(".container");
    var card = document.createElement("div");
    card.classList.add("card");
    var cardIcon = document.createElement("div");
    cardIcon.innerHTML = "<ion-icon name=\"person-outline\"></ion-icon>";
    cardIcon.classList.add("icon");
    var cardContent = document.createElement("div");
    var cardButton = document.createElement("div");
    cardButton.classList.add("cardButton");
    var ricarica = document.createElement("button");
    ricarica.innerHTML = "Ricarica";
    var chiama = document.createElement("button");
    chiama.innerHTML = "Chiama";
    var chiudi = document.createElement("button");
    chiudi.innerHTML = "Stop";
    cardContent.innerHTML = "<h2>User</h2><p>Saldo Conto: ".concat(conto, "</p><p>Numero Chiamate: ").concat(numero, "</p>");
    cardContent.classList.add("content");
    var cardInput = document.createElement("input");
    var cardTimer = document.createElement("div");
    cardInput.classList.add("show");
    cardTimer.classList.add("timerShow");
    cardTimer.id = id;
    cardButton.append(ricarica, chiama, chiudi);
    cardContent.append(cardButton, cardInput, cardTimer);
    card.append(cardIcon);
    card.append(cardContent);
    container === null || container === void 0 ? void 0 : container.append(card);
    console.log(timer);
    /* Bottone ricarica */
    ricarica.addEventListener("click", function () {
        cardInput.classList.toggle("active");
    });
    /* Bottone Chiama */
    chiama.addEventListener("click", function () {
        cardTimer.classList.add("active");
        timer.startTimer;
        console.log(timer.timer.innerHTML);
    });
    /* Bottone Stop */
    chiama.addEventListener("click", function () {
        cardTimer.classList.remove("active");
        timer.closeTimer;
    });
}
/* PRIMO UTENTE */
var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate, selector) {
        this.scattoAllaRiposta = 0.20;
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "1");
    }
    /* METODI */
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
/* SECONDO UTENTE */
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate, selector) {
        this.scattoAllaRiposta = 0.20;
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "2");
    }
    /* METODI */
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
/* TERZO UTENTE */
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate, selector) {
        this.scattoAllaRiposta = 0.20;
        this.timer = new Timer(selector);
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        creaCard(carica, numeroChiamate, this.timer, this.id = "3");
    }
    /* METODI */
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
/* OPERAZIONI */
var first = new FirstUser(15, 0, "1");
var second = new SecondUser(15, 0, "2");
var third = new ThirdUser(15, 0, "3");
>>>>>>> 3bd779549929ad404960627f9cbe35787529ff7d
