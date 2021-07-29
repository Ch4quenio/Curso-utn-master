

fetch("paises.json")
.then((res) => {
console.log(res);
if(res.ok){
console.log("Vas bien craquen")
res.json().then((paises) =>{ // Traemos el contenido del archivo JSON
console.log(paises) // lo mostramos en la consola
console.log("La poblacion de " + paises[2].nombre + " es " + paises[2].poblacion + " y el segundo color de su bandera es  " + paises[2].colores[1])
for( var i = 0; i < 3; i++){

//
var pais = document.createElement("li")
//
// pais.innerHTML = "La poblacion de " + paises[i].nombre + " es de " + paises[i].poblacion
//
// lista.appendChild(pais)

var nombrePais = document.createElement("h2")

nombrePais.innerHTML = paises[i].nombre

lista.appendChild(nombrePais)

var contenidoPais = document.createElement("p")

contenidoPais.innerHTML = "La poblacion es de " + paises[i].poblacion

lista.appendChild(contenidoPais)

}


})
}
else{
  console.log("Salio 404 y sos un boludooo" +  res.statusText)
}
})
.catch((error) =>{
  console.error("Error:  " +  error.statusText)
})
