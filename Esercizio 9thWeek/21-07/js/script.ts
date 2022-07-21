class Abbigliamento {
    id: string;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantità: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(id: string,
        codprod: number,
        collezione: string,
        capo: string,
        modello: number,
        quantità: number,
        colore: string,
        prezzoivaesclusa: number,
        prezzoivainclusa: number,
        disponibile: string,
        saldo: number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo / 100;
    }

    /* Metodi */
    getsaldocapo(): number {
        let prezzoScontato = this.prezzoivainclusa - (this.saldo * this.prezzoivainclusa)
        prezzoScontato = parseInt(prezzoScontato.toFixed(2))
        return prezzoScontato;
    }

    getacquistocapo(): number {
        return this.prezzoivainclusa;
    }
}

let capi: Array<object> = []

let url = "http://localhost:3000/capi";

async function capoAbbigliamento() {

    let response = await fetch(url);
    
    let res = await response.json();

    res.forEach((e:Abbigliamento) => {
        capi.push(new Abbigliamento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantità, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo))
    })
}

capoAbbigliamento();