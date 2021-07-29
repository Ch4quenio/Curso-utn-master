const express  = require("express");
const app = express();
// Le aviso a express que voy a usar EJS
app.engine("ejs",require("ejs").renderFile);
app.set("view engine", "ejs");





app.get("/",(rq,res)=>{
  let title = "Hola esto te lo envio por express";
  let precio = 1500;
  let numeros = [1,2,3,4,5,6];
  let paises = [
    {
      "nombre" : "Argentina",
      "poblacion" : "45.000.000",
      "Primer mundo?": "no!"
    },
    {
      "nombre" : "Francia",
      "poblacion" : "67.000.000",
      "Primer mundo?": "Si, pero en la torre eiffel hay ratas  y eso la baja un toque."
    },
    {
      "nombre" : "Mexico",
      "poblacion" : "127.000.000",
      "Primer mundo?": "ponele que si. PONELEE"
    }
  ];

// res.send("Hola, vas bien") le pido que renderice el archivo
res.render("home.ejs",{
title,precio,numeros,paises, // Las variables de este archivo que van a ser usadas en el EJS.
});

})

app.listen(3000,()=>{
  console.log("Esto esta corriendo")
})
