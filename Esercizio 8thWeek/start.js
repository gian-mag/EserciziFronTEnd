/*

CREARE IL SERVER
- npm install json-server
- Creare il nostro database
    - creare un file db.json
    - inserire un oggetto con proprietà array per ogni tabella che possiamo raggiungere
    - inserire (se vogliamo) dei dati di partenza (oggetti nell'array) -> inderire la proprietà id per ogni elemento
    - puoi prendere un db già pronto da jsonplaceholder
- json-server --watch db.json
    - nel caso dovesse darvi errore cmdlet -> npx json-server --watch db.json


- url resources -> url API
- a ogni comunicazione la risposta è visibile nel terminale

- testare con postman (per inviare body, usare raw data in json)


OPERAZIONI SUL DB -CRUD Create Read Update Delete

fetch(url, options).then(...)

- Lettura - GET -> json
Al caricamento del file / (tasto dettagli * )
    - url: http://localhost:3000/users -> tutti gli utenti
    - http://localhost:3000/users/5 -> utente id == 5

- Eliminazione - DELETE - {}
Pulsante Elimina
    - url: http://localhost:3000/users/5 -> elimina utente 5 (non tutta la tabella)
    - options: {
        method: "DELETE"
    }

- Aggiunta - POST - send: data, repsonse: {id:5, data}
Form aggiunta utente (validazione)
    - url: http://localhost:3000/users -> intera tabella
    - options: {
        method: "POST",
        headers: {
            //proprietà con apici -> indicano che tipo di dato invieremo
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(data) -> versione stringa di un oggetto con i dati da caricare sul db
    }

- Modifica - PUT - send: data, response {utente}
Form modifica utente (validazione)
    - url: http://localhost:3000/users/5 -> utente con id 5 da modificare
    - options: {
        method: "POST",
        headers: {
            //proprietà con apici -> indicano che tipo di dato invieremo
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(data) -> versione stringa di un oggetto con i dati da caricare sul db (tutti i dati che vogliamo mantenere), non serve includere l'id
        
        //quando premete il tasto modifica far comparire un form con tutti i dati inseriti, usare quel form come origina dei dati dell'oggetto

*/

/* const e = require("express"); */

//ES modificare nome e email dell'utente 5
/* fetch("http://localhost:3000/users/5", {
    method: "PUT",
    headers: {
        //proprietà con apici -> indicano che tipo di dato invieremo
        "Accept": "application/json",
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name: "Flavio",
        email: "test@test.com"
        //L'utente 5 avrà solo questi dati e l'id
    })
}).then(res=>res.json()).then((res)=>{
    console.log(res)
}) */