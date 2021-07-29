console.log(Math.PI)


var random = parseInt(Math.random() * 100);

console.log(random)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log("Tu numero aleatorio es " + getRandomInt(50,500))
