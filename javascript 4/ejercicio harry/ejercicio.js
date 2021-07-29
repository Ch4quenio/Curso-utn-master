

for (i = 0; i < 101; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("Voldemort")
  }
  else if (i % 5 === 0){
    console.log("Potter")
  }
  else if ( i % 3 === 0){
    console.log("Harry")
  }
  else{
    console.log(i)
  }
}
