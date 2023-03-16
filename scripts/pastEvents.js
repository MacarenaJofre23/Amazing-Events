let contenedorMainPast = document.getElementById("mainPast")
let Events = data.events

let currentDate = data.currentDate

let pastEvents = ""

let containerCards = document.getElementById("main")

function eventPast (array, datte) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].date < datte) {
      pastEvents += `
    <div class="card m-5 col-3" style="width: 18rem  justify-content-center">
        <img src="${array[i].image}" class="card-img" alt="${array[i].name}"> 
      <div class="card-body">
        <h5 class="card-title">${array[i].name}</h5>
        <p class="card-text">${array[i].description}</p>
        <p class"card-text">Date of Event: ${array[i].date}</p>
        <p class="card-text">Precio: ${array[i].price}</p> 
      
     </div>
  </div>`
    }
  }
}
eventPast (Events, currentDate);
contenedorMainPast.innerHTML = pastEvents
