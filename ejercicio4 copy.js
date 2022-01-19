//Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo, 
//debe imprimir el producto de los tres y si no lo es, imprimirá la suma.

const prompt = require("prompt-sync")();

let number1 = prompt("Introduce el numero: ");
let number2 = prompt("Introduce el numero: ");
let number3 = prompt("Introduce el numero: ");

let sum = Number(number1) + Number(number2) + Number(number3);
let multi = Number(number1) * Number(number2) * Number(number3);

/**
 * if (number1 < 0) {
    console.log(multi);
} else {
    console.log(sum);
}
*/

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) { //isNotaNumber
    console.log("Los datos DEBEN ser números");
} else {
    if (number1 < 0) {
        const producto = number1 * number2 * number3;
        console.log("El producto es:", multi);
    } else {
        const suma = number1 + number2 + number3;
        console.log("La suma es:", sum);
    }
}
