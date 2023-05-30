#practicas operadores logicos

Escribe un código que pregunte por el inicio de sesión con propmt.

- Si el visitante ingresa "Admin", entonces prompt(pregunta) por una contraseña, 
- si la entrada es una linea vacía o Esc – muestra “Cancelado.”,
- si es otra cadena de texto – entonces muestra “No te conozco”.

La contraseña se comprueba de la siguiente manera:

- Si es igual a “TheMaster”, entonces muestra “Bienvenido!”,
- Si es otra cadena de texto – muetra “Contraseña incorrecta”,
- Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.”

```Js
let user = prompt("Tu nombre de usuario");
if (user === "Admin") {
  let ps = prompt("Introduce tu contraseña");
  if (ps === "TheMaster") {
    alert("Bienvenido");
  } else if (ps === null || ps === "") {
    alert("Contraseña cancelada");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (user === null || user === "") {
  alert("Usuario cancelado");
} else {
  alert("Usuario inválido");
}
```