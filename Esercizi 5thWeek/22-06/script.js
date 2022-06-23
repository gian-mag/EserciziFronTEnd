let c = document.getElementsByClassName("cubo");
let prev = document.querySelector(".button:first-of-type");
let next = document.querySelectorAll(".button")[1];
let play = document.getElementById("play");
let gradi = 0;


next.addEventListener("click", () => {
    gradi += 90;
    c[0].style.transform = "rotateY(" + gradi + "deg)";
})

prev.addEventListener("click", () => {
    gradi -= 90;
    c[0].style.transform = "rotateY(" + gradi + "deg)";
})

play.addEventListener("click", () => {
    setInterval(() => {
        next.click()
    }, 1000);
});