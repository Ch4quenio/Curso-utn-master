


clave.addEventListener("blur" ,   ()=> {

console.log("Abandonaste el campo contraseña");

if (clave.value.length < 10){ // Length indica cuantos compartimientos tiene, en este caso cuantos espacios ocupa, sin importar el valor.
alert("Oh no eres gilipollas")
}


})
