// console.log("Hola! Esto funciona");
reproducir.addEventListener("click", () => {
    // console.log("Hiciste clic en play");
    audio.play();
    // Ocultar el botón de reproducir
    reproducir.classList.add("ocultar");
    // Mostrar el botón de pausa
    pausa.classList.remove("ocultar");
});
// Mini tarea: armar el pausa
pausa.addEventListener("click", () => {
    // console.log("vas bien!");
    // Mini tarea: hacer aparecer y desaparecer los botones según corresponda
    audio.pause();
    // Ocultar el botón de pausa
    pausa.classList.add("ocultar");
    // Mostrar el botón de reproducir
    reproducir.classList.remove("ocultar");
});
