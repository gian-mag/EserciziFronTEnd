class SonAccount {
    balanceInit: number;
    constructor(balanceInit: number) {
        this.balanceInit = balanceInit;
    }
    oneDeposit(payment: number): number | boolean { //versamento
        if (payment > 50) {
            return this.balanceInit += payment;
            alert("Figlio stai finalmente crescendo =')");

        } else {
            return this.balanceInit += payment;
        }
    }
    oneWithdraw(withdrawal: number) { //prelievo
        if (withdrawal > 50) {
            alert("Ma tu si pazz' propr!! Non ti permettere sai!!")
            return this.balanceInit;
        } else if ((this.balanceInit - withdrawal) <= 0) {
            return this.balanceInit = 0;
        } else {
            alert("Ma tu lo sai quanto mi costi?")
            return this.balanceInit -= withdrawal
        }
    }

    myBalance() {
        return this.balanceInit;
    }

}
class MotherAccount extends SonAccount {
    private interest: number = 10 / 100;
    constructor(balanceInit: number) {
        super(balanceInit)
    }
    twoDeposit(payment: number): number { //versamento
        return this.balanceInit += (payment - this.addInterest(payment));
    }
    twoWithdraw(withdrawal: number) { //prelievo
        return this.balanceInit -= (withdrawal - this.addInterest(withdrawal));
    }

    private addInterest(amount: number) {  //interesse MotherAccount 10%
        return amount * this.interest;
    }
}

let mAcc;
let fAcc;

let contoMamma = document.querySelector(".saldoMadre");
let saldoMamma = document.querySelector(".bilancio1")
let contoFiglio = document.querySelector(".saldoFiglio");
let saldoFiglio = document.querySelector(".bilancio2")

contoMamma.addEventListener("click", () => {
    mAcc = new MotherAccount(2000);
    saldoMamma.innerHTML = "Saldo Attuale: " + mAcc.myBalance();
});

contoFiglio.addEventListener("click", () => {
    fAcc = new SonAccount(0);
    saldoFiglio.innerHTML = "Saldo Attuale: " + fAcc.myBalance();
})

let formMam = document.querySelector(".madre");
let prelMam = (document.querySelector(".Preleva") as HTMLInputElement);
console.log(prelMam);
let depMam = (document.querySelector(".Deposita") as HTMLInputElement);

let formFig = document.querySelector(".figlio");
let prelFig = (document.querySelector(".Preleva2") as HTMLInputElement);
let depFig = (document.querySelector(".Deposita2") as HTMLInputElement);

document.querySelector(".withdraw").addEventListener("click", (event) => {
    event.preventDefault();
    mAcc.twoWithdraw(parseInt(prelMam.value));
    saldoMamma.innerHTML = "Saldo Disponibile: " + mAcc.myBalance();
    prelMam.value = "";
});

document.querySelector(".payment").addEventListener("click", (event) => {
    event.preventDefault();
    mAcc.twoDeposit(parseInt(depMam.value));
    saldoMamma.innerHTML = "Saldo Disponibile: " + mAcc.myBalance();
    depMam.value = "";
});


document.querySelector(".withdraw2").addEventListener("click", (event) => {
    event.preventDefault();
    fAcc.oneWithdraw(parseInt(prelFig.value));
    saldoFiglio.innerHTML = "Saldo Disponibile: " + fAcc.myBalance();
    prelFig.value = "";
});

document.querySelector(".payment2").addEventListener("click", (event) => {
    event.preventDefault();
    fAcc.oneDeposit(parseInt(depFig.value));
    saldoFiglio.innerHTML = "Saldo Disponibile: " + fAcc.myBalance();
    depFig.value = "";
});