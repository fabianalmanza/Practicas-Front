
// // 
// Las formas sufijo y prefijo
// ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
let e;
let b;
 e = 1;
 b = 1;

let c = ++e; // 2?
let d = b++; // 1?
console.log(c);
console.log(d);
// Resultado de asignación
// importancia: 3
// ¿Cuáles son los valores de ‘a’ y ‘x’ después del código a continuación?

let a = 2;

let x = 1 + (a *= 2); //La respuesta es:

// a = 4 (multiplicado por 2)
// x = 5 (calculado como 1 + 4)


// Conversiones de tipos
// importancia: 5
// ¿Cuáles son los resultados de estas expresiones?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)
// La suma con una cadena "" + 1 convierte 1 a un string: "" + 1 = "1", y luego tenemos "1" + 0, la misma regla se aplica.
// La resta - (como la mayoría de las operaciones matemáticas) sólo funciona con números, convierte una cadena vacía "" a 0.
// La suma con una cadena concatena el número 5 a la cadena.
// La resta siempre convierte a números, por lo tanto hace de " -9 " un número -9 (ignorando los espacios que lo rodean).
// null se convierte en 0 después de la conversión numérica.
// undefined se convierte en NaN después de la conversión numérica.
// Los caracteres de espacio se recortan al inicio y al final de la cadena cuando una cadena se convierte en un número. Aquí toda la cadena consiste en caracteres de espacio, tales como \t, \n y un espacio “común” entre ellos. Por lo tanto, pasa lo mismo que a una cadena vacía, se convierte en 0.






// Piensa bien, anótalos y luego compara con la respuesta.

// Corregir la adición
// importancia: 5
// Aquí hay un código que le pide al usuario dos números y muestra su suma.

// Funciona incorrectamente. El resultado en el ejemplo a continuación es 12 (para valores de captura predeterminados).

// ¿Por qué? Arreglalo. El resultado debería ser 3.

let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);

alert(a + b); // 12
// let a = prompt("¿Primer número?", 1);
// let b = prompt("¿Segundo número?", 2);

// alert(+a + +b); // 3
