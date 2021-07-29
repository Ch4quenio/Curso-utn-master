//Crear elemento <p>
var parrafo = document.createElement("p");
// Le agrego contenido al parrafo
parrafo.innerHTML = "Lista del supermercado";
// Lo agrego al HTML
aca.appendChild(parrafo) // Aca es el nombre de la clase del div en HTML, eso sirve para saber donde poner el elemento


var boton = document.getElementById("boton");

var input = document.getElementById('espacio')

boton.addEventListener("click",()=>{
  var objeto = document.createElement("li")
  objeto.innerHTML = input.value;
  lista123.appendChild(objeto)
})

let i = 0;


while( i < 100){
  i++;
  console.log(i)
}
