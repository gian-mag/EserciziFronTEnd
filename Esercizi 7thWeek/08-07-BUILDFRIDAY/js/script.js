let url = "./users1.json";

let users = [];

let container = document.querySelector('.container'); // mi prendo il div di class container
console.log(container);

Math.random()

async function getCard() {

    await fetch(url).then(res => res.json()).then((res) => {
        users = res;
        console.log(users);
    })

    users.users.forEach((e) => {

        let card = document.createElement("div"); //! creami un div.card --> dovrò mettere i div di classe nome, cognome, email

        let cardBack = document.createElement("div");

        let cardFront = document.createElement("div");

        let userName = document.createElement("div"); //! creami un div.name

        let userEmail = document.createElement("div"); //! creami un div.email

        let userIcon = document.createElement("div");
        userIcon.classList.add("icons");


        console.log(e.name);
        userName.innerHTML = e.name;
        userName.classList.add("name");
        console.log(userName)
        userEmail.innerHTML = e.email;
        userEmail.classList.add("email");

        container.appendChild(card);


        if (e.gender == "Male") {
            userIcon.innerHTML = '<i class="fa-solid fa-child"></i>';
        } else {
            userIcon.innerHTML = '<i class="fa-solid fa-child-dress"></i>';
        }

        cardFront.appendChild(userIcon);

        cardFront.appendChild(userName);

        cardFront.appendChild(userEmail);

        cardFront.classList.add("cardFront");
        cardBack.classList.add("cardBack");
        cardBack.innerHTML= `Phone Number: ${e.phone} <br> <br> WebSite: ${e.website}`;
        cardBack.classList.add("box");
        cardFront.classList.add("box");

        card.appendChild(cardFront);

        card.appendChild(cardBack);

        card.classList.add("cardCube");


        card.addEventListener("click", activeLink)
        function activeLink() {
            this.classList.toggle("rotate")
        }

    })

}

getCard();


