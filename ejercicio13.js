/**
 Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
//Superficie= base*altura
//Perímetro = 2*(base + altura)
Comprobar los resultados con varios datos de entradas diferentes.
*/

const prompt = require("prompt-sync")();
let Base= prompt("Introduzca base del rectangulo :" );
let Altura = prompt("Introduzca la altura del rectangulo:" );

const superficie = Number(Base) * Number(Altura) ;
const perimetro = Number(2)* (Number(Base)+ Number(Altura   )) ;

console.log("La superficie del rectangulo es: ", superficie);
console.log("El perimetro del rectangulo es : ",perimetro);
