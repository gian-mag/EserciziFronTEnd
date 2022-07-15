// START ESERCIZIO 

/*  NAVBAR */
let toggler = document.querySelector(".toggle");
let searchBar = document.querySelector(".search");
toggler.onclick = function () {
    searchBar.classList.toggle("open");
    toggler.classList.toggle("open")
}
let searchInput = document.querySelector(".bar");

/////////////////////////// */

let url = "http://localhost:3000/users/";
let users = [];
let table = document.getElementById("tableAPI");
let twrapper = document.getElementById("wrapper");
let addUser = document.getElementById("addUser");
let id = "";        /* GD */
let modId = "";
let delId = "";
let p;
let tr = [];
let dettagli = document.getElementById("dettagli");
let modifica = document.getElementById("modifica");
let validator1 = true;
let validator2 = true;
let valid = true;


//MODALE
var modal = document.getElementById("myModal");

var span = document.querySelector(".close");

span.onclick = function () {
    modal.style.display = "none";
}

let arrayRiga = [];


/* CREA RIGA */
function creaRiga(e) {
    let tRow = document.createElement("tr"); // creami la riga
    tRow.id = e.id;
    tRow.classList.add("row");
    //se nell'arrayRiga c'è già un elemento con quell'id specifico
    // non lo pushare
    //altrimenti pushalo
    if (arrayRiga.find(tr => { return tr.id == `${tRow.id}` })) { // non funziona ancora
        console.log("return nothing")
    } else {
        arrayRiga.push(tRow); // aggiungimi la riga dentro l'arrayRiga vuoto
    }
    let tdUser = document.createElement("td");
    let tdEmail = document.createElement("td");
    let tdButtons = document.createElement("td");
    let tdBtn2 = document.createElement("button");
    let tdBtn3 = document.createElement("button");
    let tdBtn4 = document.createElement("button");

    tdUser.innerHTML = e.username;
    tdEmail.innerHTML = e.email;

    tdBtn2.innerHTML = "Dettagli";
    tdBtn2.className = "btn-det";
    tdBtn3.innerHTML = "Modifica";
    tdBtn3.className = "btn-mod";
    tdBtn4.innerHTML = "Elimina";
    tdBtn4.className = "btn-del";

    tdButtons.appendChild(tdBtn2);
    tdButtons.appendChild(tdBtn3);
    tdButtons.appendChild(tdBtn4);

    tdButtons.className = "bottoni";

    tRow.appendChild(tdUser);
    tRow.appendChild(tdEmail);
    tRow.appendChild(tdButtons);

    twrapper.appendChild(tRow);


    /*  funzione dettagli */        /* GD + Chiara */
    tdBtn2.addEventListener("click", function () {

        valid = true;
        validator1 = false;
        console.log(valid)
        modifica.classList.remove("active");
        document.getElementById("aggiungi").classList.remove("active");

        if (e.id == id && validator2 == true) {
            dettagli.classList.remove("active");
            id = "";
            validator2 = false;
            
        } else {
            dettagli.classList.add("active");
            dettagli.innerHTML = "<h2>" + e.name + "</h2>" + "<h3>" + e.username + "</h3>" + "<p>Email: " + e.email + "</p>" + "<p>Phone: " + e.phone + "</p>" + "<h4>Address: </h4>" + "<p>" + e.address.street + "</p>" + "<p>" + e.address.city + "</p>" + "<p>" + e.address.zipcode + "</p>";
            id = e.id;
            validator2 = true;

        }
    });

    /* funzione ELIMINA */      /* GD */
    tdBtn4.addEventListener("click", function () {
        modal.style.display = "block";      // QUANDO premi il tasto ELIMINA, rendimi visibile il modale

        delId = e.id

    });


    /* funzione MODIFICA */
    tdBtn3.addEventListener("click", function () {

        dettagli.classList.remove("active");
        document.getElementById("aggiungi").classList.remove("active");
        validator2 = false;

        if ((e.id == modId && validator1 == true) || (valid == false)) {
            modifica.classList.remove("active");
            modId = "";
            validator1 = false;
            
        } else {
            modifica.classList.add("active");
            document.getElementById("mod-name").value = e.name;
            document.getElementById("mod-username").value = e.username;
            document.getElementById("mod-email").value = e.email;
            document.getElementById("mod-street").value = e.address.street;
            document.getElementById("mod-city").value = e.address.city;
            document.getElementById("mod-zipcode").value = e.address.zipcode;

            dettagli.innerHTML = "<h2>" + e.name + "</h2>" + "<h3>" + e.username + "</h3>" + "<p>Email: " + e.email + "</p>" + "<p>Phone: " + e.phone + "</p>" + "<h4>Address: </h4>" + "<p>" + e.address.street + "</p>" + "<p>" + e.address.city + "</p>" + "<p>" + e.address.zipcode + "</p>";

            modId = e.id;
            validator1 = true;
            
        }
        console.log(valid)
    });

}


/* event Listener sul MODALE */
span.addEventListener("click", function () {        // quando il modal, non ha display block // Quando il modale non ha display block? Quando premo il tasto span
    console.log(delId)
    // allora eseguimi la fetch ed elimina la riga
    if (delId != "") {
        fetch(url + delId, {
            method: 'DELETE'
        }).then(() => {
            console.log('removed');
            /* elimina riga */

            rimuovi(delId);

            //se nella tabella, non ci sono elementi
            if (p.itemsToDisplay.length == 1) {
                p.prevPage();   // allora torna alla pagina precedente --> prevPage
            } else {
                // altrimenti fai --> getVisibleItems()
                p.getVisibleItems();
            }
            delId = "";
        }).catch(err => {
            console.error(err);
        })
    } else {
        modal.style.display = "none"
    }
})
/* pulsante annulla del modale */
document.querySelector(".annulla").addEventListener("click", function () {
    modal.style.display = "none";
})


/* FUNZIONE RIMUOVI */
function rimuovi(parametro) {
    let indice = arrayRiga.findIndex(obj => { return obj.id == parametro });
    tr.splice[indice, 1];
    arrayRiga.splice(indice, 1);
    p.items.splice(indice, 1);
    p.itemsToDisplay.splice(indice, 1);
}


class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items
        this.pageSize = pageSize
        this.currentPage = 1
        this.itemsToDisplay = []
        this.id = this.itemsToDisplay.id;
        this.getVisibleItems();
    }

    getTotalPages() {
        return Math.ceil(this.itemsToDisplay.length / this.pageSize)
    }

    prevPage() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1
        this.getVisibleItems();
    }

    nextPage() {
        console.log(this.currentPage)
        this.currentPage = this.currentPage < this.getTotalPages() ? this.currentPage + 1 : this.getTotalPages()
        console.log(this.currentPage)
        this.getVisibleItems();
    }

    getVisibleItems(lista = this.items) {
        twrapper.innerHTML = "";
        this.itemsToDisplay = this.ricerca();
        this.currentPage = this.currentPage > this.getTotalPages() ? this.getTotalPages() : this.currentPage;
        let end = this.currentPage * this.pageSize;
        let start = end - this.pageSize;
        /* let risultatiRicerca = this.ricerca() */ // ricerca deve restituirmi l'array con i risultati della ricerca

        /* this.itemsToDisplay = lista.slice(start, end); */ // potrebbe diventare il filter della searchBar
        this.itemsToDisplay.slice(start, end).forEach((e) => { creaRiga(e) })

    }

    goToLastPage() {
        // se esiste un oggetto in una pagina successiva (lo aggiungo)
        this.currentPage = this.getTotalPages() //mia ultima pagina
        this.getVisibleItems();
        // vai all'ultima pagina
    }

    ricerca() {

        let filter = this.items.filter(item => { return item.username.toLowerCase().includes(searchInput.value.toLowerCase()) });

        /* this.getVisibleItems(filter); */
        return filter

    }

}

async function getTable() {

    await fetch(url).then(res => res.json()).then((res) => {

        users = res;

        p = new Pagination(users, 4)
        console.log(p)

        let precedente = document.querySelector('#precedente');
        precedente.addEventListener('click', function () {

            p.prevPage();
        });

        let successivo = document.querySelector('#successivo');
        successivo.addEventListener('click', function () {

            p.nextPage();
        });

        searchInput.addEventListener("keyup", function () {
            p.getVisibleItems();
        })
    })

}

getTable();


/* pulsante toggle per aggiungi */
let adding = document.getElementById('adding');

adding.addEventListener("click", function () {
    document.getElementById("aggiungi").classList.toggle("active");
    dettagli.classList.remove("active");
    modifica.classList.remove("active");
    validator1 = false;
    validator2 = false;

});


/* Evento AGGIUNGI UTENTE */
document.getElementById("aggiungi").addEventListener("submit", function (event) {

    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        address:
        {
            street: document.getElementById("street").value,
            city: document.getElementById("city").value,
            zipcode: document.getElementById("zipcode").value,
        }
    }

    fetch("/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(res => {
        console.log(res);
        p.items.push(res);
        p.goToLastPage();
    });

});


/* Funzione tasto MODIFICA UTENTI */
document.getElementById("modifica").addEventListener("submit", function (event) {

    event.preventDefault();

    fetch("/users/" + modId, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("mod-name").value,
            username: document.getElementById("mod-username").value,
            email: document.getElementById("mod-email").value,
            address: {
                street: document.getElementById("mod-street").value,
                city: document.getElementById("mod-city").value,
                zipcode: document.getElementById("mod-zipcode").value
            }
        })
    }).then(res => res.json()).then(res => {
        console.log(res);
        let indice = p.items.findIndex(obj => { return obj.id == res.id });
        p.items.splice(indice, 1, res)
        p.getVisibleItems();
    })

})