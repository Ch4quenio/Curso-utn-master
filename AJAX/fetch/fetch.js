traer.addEventListener("click",()=>{
fetch("prueba.txt") // Estamos pidiendo el archivo al servidor, similar al xhr
.then((res) =>{ // Res es la informacion  de la solicitud.
  console.log(res) // Consologueamos el archivo
  if(res.ok){ // si res existe, nos devuelve este mensaje. Cuando el status de un archivo es 200 significa que esta bien y el archivo existe.
    console.log("Devolvio 200 y tenes futuro en esto")
    res.text().then((contenido) =>{
      console.log(contenido)
      respuesta.innerHTML = contenido
    })
  }
  else { // Si res no existe nos devuelve este mensaje
    console.log("Devolvio 404 y sos un pelotudo")
  }
})
.catch((error) =>{
  console.log("Fallo" + error)
})



})
