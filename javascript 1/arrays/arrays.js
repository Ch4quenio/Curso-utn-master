


var numeros = [1,2,3,4,5];

// console.log("El numero elegido fue el " + numeros[3])  Va a aparecer el dos porque se empieza a contar desde el 0
//
//
// console.table(numeros)  Crea una lista con los arrays enumerados
//
console.log(numeros.length) // JS Cuenta cuantos espacios hay en nuestro array.


// Ejercicio: Hacer que se sumen todos los numeros dentro de los arrays

let suma = 0; // Se crea una variable para sumar con la variable numero, la variable numero tiene el valor de cada numero del array por cada vuelta

for (numero of numeros ){ // Se usa el bucle for, en el cual se crea una variable llamada numero la cual va a dar una vuelta por cada numero que se encuentre en el array numero, en este caso hay 5 numeros por lo tanto da 5 vueltas.

suma = suma  + numero; // Por cada vuelta a 0 le va a sumar cada numero del array, por ejemplo: En la primera vuelta le suma 1, en la segunda le suma 2, en la tercera 3 y asi sucesivamente hasta llegar al 5 que es el ultimo numero de arrays


}

//Contadores = contar vueltas. No cuentan cosas que cambien, cuentan su valor fijo.
//Acumuladores = Cuentan valores que siempre cambian, ya que siempre se le esta sumando o restando algo. El punto es que su valor siempre cambia.
document.write("La suma es " + suma) // Con esta linea de codigo imprimimos en la pantalla la suma total de todos los arrays, en este caso 15
