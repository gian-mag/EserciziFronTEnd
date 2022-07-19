var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (payment) {
        if (payment > 50) {
            return this.balanceInit += payment;
            alert("Figlio stai finalmente crescendo =')");
        }
        else {
            return this.balanceInit += payment;
        }
    };
    SonAccount.prototype.oneWithdraw = function (withdrawal) {
        if (withdrawal > 50) {
            alert("Ma tu si pazz' propr!! Non ti permettere sai!!");
            return this.balanceInit;
        }
        else if ((this.balanceInit - withdrawal) <= 0) {
            return this.balanceInit = 0;
        }
        else {
            alert("Ma tu lo sai quanto mi costi?");
            return this.balanceInit -= withdrawal;
        }
    };
    SonAccount.prototype.myBalance = function () {
        return this.balanceInit;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        var _this = _super.call(this, balanceInit) || this;
        _this.interest = 10 / 100;
        return _this;
    }
    MotherAccount.prototype.twoDeposit = function (payment) {
        return this.balanceInit += (payment - this.addInterest(payment));
    };
    MotherAccount.prototype.twoWithdraw = function (withdrawal) {
        return this.balanceInit -= (withdrawal - this.addInterest(withdrawal));
    };
    MotherAccount.prototype.addInterest = function (amount) {
        return amount * this.interest;
    };
    return MotherAccount;
}(SonAccount));
var mAcc;
var fAcc;
var contoMamma = document.querySelector(".saldoMadre");
var saldoMamma = document.querySelector(".bilancio1");
var contoFiglio = document.querySelector(".saldoFiglio");
var saldoFiglio = document.querySelector(".bilancio2");
contoMamma.addEventListener("click", function () {
    mAcc = new MotherAccount(2000);
    saldoMamma.innerHTML = "Saldo Attuale: " + mAcc.myBalance();
});
contoFiglio.addEventListener("click", function () {
    fAcc = new SonAccount(0);
    saldoFiglio.innerHTML = "Saldo Attuale: " + fAcc.myBalance();
});
var formMam = document.querySelector(".madre");
var prelMam = document.querySelector(".Preleva");
console.log(prelMam);
var depMam = document.querySelector(".Deposita");
var formFig = document.querySelector(".figlio");
var prelFig = document.querySelector(".Preleva2");
var depFig = document.querySelector(".Deposita2");
document.querySelector(".withdraw").addEventListener("click", function (event) {
    event.preventDefault();
    mAcc.twoWithdraw(parseInt(prelMam.value));
    saldoMamma.innerHTML = "Saldo Disponibile: " + mAcc.myBalance();
    prelMam.value = "";
});
document.querySelector(".payment").addEventListener("click", function (event) {
    event.preventDefault();
    mAcc.twoDeposit(parseInt(depMam.value));
    saldoMamma.innerHTML = "Saldo Disponibile: " + mAcc.myBalance();
    depMam.value = "";
});
document.querySelector(".withdraw2").addEventListener("click", function (event) {
    event.preventDefault();
    fAcc.oneWithdraw(parseInt(prelFig.value));
    saldoFiglio.innerHTML = "Saldo Disponibile: " + fAcc.myBalance();
    prelFig.value = "";
});
document.querySelector(".payment2").addEventListener("click", function (event) {
    event.preventDefault();
    fAcc.oneDeposit(parseInt(depFig.value));
    saldoFiglio.innerHTML = "Saldo Disponibile: " + fAcc.myBalance();
    depFig.value = "";
});
