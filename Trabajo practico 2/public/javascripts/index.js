//
//
// var espacio = null;
//
// function encontrarPais(){
//   espacio = document.getElementsByName("espacio")[0].value;
//   // fetch("https://api.covid19api.com/summary")
//   // .then(res =>{
//   //   if(res.ok){
//   //     console.log("Vas bien hermano, todo saldra adelante" + res)
//   //     res.json().then(clima =>{
//   //
//   //        datos.innerHTML = clima.Countries[espacio].Country;
//   //        datos2.innerHTML = clima.Countries[espacio].NewDeaths;
//   //     })
//   //   }
//   //   else {
//   //   console.log("Siempre sos asi de pelotudo? " + res.status)
//   //   }
//   // })
//   // .catch(error =>{
//   //   console.error("Ups, Algo fallo" + error)
//   // })
// };

// fetch("https://api.covid19api.com/dayone/country/argentina/status/confirmed")
// .then(res =>{
//   if(res.ok){
//     console.log("Vas bien hermano, todo saldra adelante" + res)
//     res.json().then(clima =>{
//
//        // datos.innerHTML = clima.Countries[0].Country;
//        // datos2.innerHTML = clima.Countries[0].NewDeaths;
//     })
//   }
//   else {
//   console.log("Siempre sos asi de pelotudo? " + res.status)
//   }
// })
// .catch(error =>{
//   console.error("Ups, Algo fallo" + error)
// })

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
