let elementoCuentaRegresiva = document.getElementById("regresiva");
let tiempoIni = 30;
let elementoSonidoFinal = document.getElementById("sonido1");

let intervalo;
let timeT = setTimeout(gameOver, 30000);

function comenzarReloj() {

    intervalo = setInterval(tictac, 1000);

}

function tictac() {

    tiempoIni = tiempoIni - 1;
    elementoCuentaRegresiva.textContent = tiempoIni;


}


function gameOver() {

    clearInterval(intervalo);
    elementoSonidoFinal.play();
    elementoSonidoFinal.currentTime = 0;
    elementoCuentaRegresiva.textContent = "GAME OVER";

}
let parrafoFinal = document.getElementById("contenidoRespuestas");
let textoFinal = "";
let fecha = new Date();
let botonReiniciar = document.getElementById("btnReiniciar");
function respuestas() {
    clearInterval(intervalo);
    clearTimeout(timeT);
    textoFinal += document.getElementById("texto1").value + "<br> ";
    textoFinal += document.getElementById("texto2").value + "<br> ";
    textoFinal += document.getElementById("texto3").value + "<br> ";
    textoFinal += document.getElementById("texto4").value + "<br> ";
    textoFinal += document.getElementById("texto5").value + "<br> ";
    textoFinal += fecha;
    parrafoFinal.innerHTML = textoFinal;
    botonReiniciar.style.display = "block";

}
function reiniciar() {
    location.reload();

}

