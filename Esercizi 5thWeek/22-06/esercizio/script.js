let c = document.getElementsByClassName("cubo");
let prev = document.querySelectorAll(".bottone")[0];
let next = document.querySelectorAll(".bottone")[1];

let play = document.getElementById("play");

let gradi = 0;

let playing = false;

function rotate() {
    let transformation = "rotateY(" + gradi + "deg)";
    //Non possiamo usare forEach su HTMLCollection
    //Metodo static .from di Array converte HTMLCollection (e altri) in array
    Array.from(c).forEach((e)=>{e.style.transform = transformation})
}


next.addEventListener("click", () => {
    gradi += 90
    rotate()
})

prev.addEventListener("click", () => {
    gradi -= 90
    rotate()
})

next.addEventListener("mouseover", ()=>{
    gradi += 20
    rotate()
})
next.addEventListener("mouseout", ()=>{
    gradi -= 20
    rotate()
})
prev.addEventListener("mouseover", ()=>{
    gradi -= 20
    rotate()
})
prev.addEventListener("mouseout", ()=>{
    gradi += 20
    rotate()
})

//Per creare un event listener per ogni evento nell'array (senza scriverli tutti)
// let events = ["mouseover", "mouseleave"]
// let functions = [()=>{
//     gradi -= 20
//     rotate()
// }, ()=>{
//     gradi += 20
//     rotate()
// }]

// events.forEach((e, i)=>{
//     prev.addEventListener(e, functions[i])
//     next.addEventListener(e, functions[(functions.length-1) - i]) //funzioni prese dall'ultima
// })

let interval //variabile per salvarci il setInterval, cosi da poterlo eliminare

play.addEventListener("click", () => {
    playing = !playing
    if (playing) {
        play.innerHTML = "Stop"
        interval = setInterval(() => {
            gradi += 90
            rotate()
        }, 1000)
    } else {
        clearInterval(interval)
        play.innerHTML = "Start"
    }
})