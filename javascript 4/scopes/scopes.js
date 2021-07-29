// Scopes significa limite o alcance

// var function scope : Si declaramos las variables dentro de una funcion, la variable solo vive ahi. Si las declaro fuera de una funcion son globlaes
// Se puede declarar una variable dos veces aunque es una mala idea :c
var numero = 45;




function sumar(n1,n2){

let suma = n1 + n2; // Esta variable no existe fuera de esta funcion

return suma;


}

//Esta linea de codigo no funciona
// console.log(suma)

// Para que no pase lo que vimos arriba. Hay que DECLARAR la variable afuera de la funcion y darle un valor dentro de la funcion.

var resultado // se declara pero no se le da valor

function multiplicar(n1,n2){

resultado = n1 * n2; // Se le da valor dentro de la funcion

return resultado

}

// Ahora si hacemos esto si funciona
console.log(resultado)


//   LET
// Let es blocke scope, significa que las variables solo viven en los corchetes {}
// Ejemplo
let numerito = 12;

if (numero > 33){

let mensaje = "esta persona es vieja"

}
else {
  let mensaje  =  "esta persona no es tan vieja" // Una variable con el mismo nombre puede tener distinto valor ya que solo vive en los corchetes
}

// Si declaramos let afuera de corchetes la variable solo se puede declarar una vez, todo lo contrario a VAR.


// CONST
// Mas usada para proyectos que requieran formulas matematicas
// Ideal para pi o IVA
// block scope
// NO SE LE CAMBIA EL VALOR POR ALGO SE LLAMA CONSTANTE FLACO, EL VALOR ES CONSTANTE
