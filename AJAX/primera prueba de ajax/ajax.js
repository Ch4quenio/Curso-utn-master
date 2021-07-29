function traerArchivo(){
console.log("Estas llamando a mi funcion")

let xhr = new XMLHttpRequest; // Creamos una solicitud y la guardamos en una variable

xhr.addEventListener("readystatechange",() =>{
  if(xhr.readyState=== 4 && xhr.status === 200){
    console.log("Hola, todo funciono y tenes mucho futuro en la programacion")
    respuesta.innerHTML = xhr.responseText; // Se crea un elemento con el contenido del txt, eso es responseText
  }
  else{
    console.log(xhr.readyState)
    console.log(xhr.status)
  }
})
//      Metodo   archivo      async
xhr.open("GET", "prueba.txt", true); // El objetivo de este codigo es mostrar el contenido del archivo mediante la solicitud de la linea 4
xhr.send();


}


traer.addEventListener("click", traerArchivo)
