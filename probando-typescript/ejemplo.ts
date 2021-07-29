console.log("Hello,world")
var nombre = "eva";
// var nombre = "Lisandro"
var boton = document.querySelector("#boton");
var mensaje = document.querySelector("#mensaje")


function saludar(nombre){

var nombre:any = prompt("Cual es tu nombre"); // se especifica que tipo de valor puede tener la variable

  return "Hola tu nombre es " + nombre
}

boton.addEventListener("click",()=>{
  alert("*gime*")
})

// mensaje.innerHTML = saludar(nombre)

function nombrePredeterminado(nombre:string,apellido = "Random"){

  return "Hola" + nombre + apellido;
}

mensaje.innerHTML = nombrePredeterminado(" Lisandro ")
