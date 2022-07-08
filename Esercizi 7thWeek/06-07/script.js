let timer = document.getElementById("zio");

let timer2 = document.getElementById("pera");

let timer3 = document.getElementById("cotta");

/* var sessionTime = ""; */

function startTimer() {

    let s = 0, m = 0, h = 0;

  /*   sessionStorage.setItem('tempo', localStorage.tempo); */

    setInterval(function () {

        timer.innerHTML = "Ore: " + h ;
        timer2.innerHTML ="Min: " + m;
        timer3.innerHTML= "Sec: " + s;
        /* timer2.innerHTML = sessionStorage.tempo + JSON.stringify(localStorage.tempo); */
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }

        
        sessionStorage.setItem('sec', s);
        sessionStorage.setItem('min', m);
        sessionStorage.setItem('h', h);

        /* if (sessionStorage.tempo != 0)  */


        /*   console.log(sessionTime); */


    }, 1000);



}

/* localStorage.setItem('tempo', sessionStorage.tempo);
console.log(localStorage.tempo); */

document.addEventListener("DOMContentLoaded", startTimer);