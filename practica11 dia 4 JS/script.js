
function agregar(valor){

document.getElementById("pantalla").value += valor;


}
function borrar(){

    document.getElementById("pantalla").value = '';

}
function calcular(){
    let valorPantalla = document.getElementById("pantalla").value;
    let result = eval(valorPantalla);
document.getElementById("pantalla").value = result;

}

function raiz(){
    let valorPantalla = document.getElementById("pantalla").value;
    let result = Math.sqrt(valorPantalla);
document.getElementById("pantalla").value = result;
}
function random(){
    let valorPantalla = +(document.getElementById("pantalla").value)+1;
    let result = Math.floor(Math.random()*(valorPantalla));
document.getElementById("pantalla").value = result;
}
function redondeo(){
    let valorPantalla = document.getElementById("pantalla").value;
    let result = Math.round(valorPantalla);
document.getElementById("pantalla").value = result;
}