


// Si un elemeneto tiene un ID en HTML, automaticamente se crea una variable en JavaScript asignada a dicho elemento.

var title =  document.getElementById("titulo")

console.log(titulo )


var lista = document.querySelector(".lista") // Selecciona tipos de elementos y clases.

console.log(lista)

var item = document.querySelector(".lista-item") // Selecciona todos los elementos con la misma clase (el anterior seleccionaba UN elmeento, este selecciona todos)
console.log(item)

var items = document.querySelectorAll(".lista-item") // Selecciona todos los elementos con la misma clase (el anterior seleccionaba UN elmeento, este selecciona todos)
console.log(item)

for (item of items){ // se recorre todos los items con un bucle
  item.addEventListener("click", (e)=>{ // se le pone un escuchador de eventos a los elementos, cuando le hagan click pasa algo...

console.log(e) // "e" trae informacion variada sobre el evento que pusiste en el addEventListener.
e.target.classList.toggle("seleccionado")
  })
}

// items.addEventListener("click",()=>{
//   alert("Hiciste click");
// })
