


//1er paso Creo la funcion
function multiplicar (precio_unitario,cantidad) {

return  precio_unitario * cantidad; // Las funciones siempre tienen que devolver el valor con el return

}

//Ejercicio

function sumar(...numeros){

let suma = 0; // Crear mi acumulador y setearlo en 0; vendria siendo I del otro for


for (numero of numeros){ // Hacemos un bucle que recorra todos los espacios del array

suma = suma + numero; // A 0 le sumamos cada numero del array en orden. El bucle se detiene cuando no hay mas numeros
}

return suma // Te devuelve el resultado final : Todos los numeros del array sumados


}

console.log(sumar(1,2,3,4,6 ))
