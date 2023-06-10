function recomendar(genero) {
    let edad = document.getElementById("edad").value;
    let recomendaciones = document.getElementById("recomendacion");
    if(edad === ""||edad<0 ){
      return recomendaciones.textContent = "Escribe Tu Edad correctamente";
    }
    switch (genero) {
        
        case 'drama':
            if (edad < 13 && edad > 0) {
                recomendaciones.textContent = "Las ventajas de ser invisible";
            } else if (edad < 16) {
                recomendaciones.textContent = "Bajo la misma estrella";
            } else {
                recomendaciones.textContent = "Taxi Driver";
            }


            break;
        case 'comedia':
            if (edad < 13 && edad > 0) {
                recomendaciones.textContent = "Suerte";
            } else if (edad < 16) {
                recomendaciones.textContent = "Todo un parto";
            } else {
                recomendaciones.textContent = "Comando especial";
            }


            break;
        case 'accion':
            if (edad < 13 && edad > 0) {
                recomendaciones.textContent = "Free guy";
            } else if (edad < 16) {
                recomendaciones.textContent = "Shazam";
            } else {
                recomendaciones.textContent = "Kill Bill";
            }


            break;
        case 'suspenso':
            if (edad < 13 && edad > 0) {
                recomendaciones.textContent = "Megan";
            } else if (edad < 16) {
                recomendaciones.textContent = "Sin Limites";
            } else {
                recomendaciones.textContent = "Busqueda Implacable";
            }


            break;

    }


}
