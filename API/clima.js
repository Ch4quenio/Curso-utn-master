

// api.openweathermap.org/data/2.5/weather?q=Resistencia&appid=cb222a66bc5a91e4213e3dd8ea4b245f&unit=metric


fetch("http://api.openweathermap.org/data/2.5/weather?q=La%20Paz&appid=cb222a66bc5a91e4213e3dd8ea4b245f&unit=metric")
.then(res =>{
  if(res.ok){
    console.log("Vas bien hermano, todo saldra adelante" + res)
    res.json().then(clima =>{
       console.log(clima)
      espacio.innerHTML = " El clima de " + clima.name +  " es " + clima.main.temp;

    })
  }
  else {
  console.log("Siempre sos asi de pelotudo? " + res.status)
  }
})
.catch(error =>{
  console.error("Ups, Algo fallo" + error)
})
