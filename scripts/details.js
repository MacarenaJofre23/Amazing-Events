//captura de variables
let stringQuery = location.search
let params = new URLSearchParams(stringQuery)
let idQuery = params.get("id")

let eventDetails = data.events.find(element => element._id == idQuery)

let cardDetails = document.getElementById("containerDetails")

console.log(eventDetails);

let stringHtml =""

stringHtml =

 ` <div class="card m-5 col-3" style="width: 18rem;">
        <img src="${eventDetails.image}" class="card-img">
        <div class="card-body">
            <h5 class="card-title">Nombre: ${eventDetails.name}</h5>
            <p class="card-text"> ${eventDetails.description}</p>
            <p class="card-text"> Fecha: ${eventDetails.date}</p>
            <p class="card-text"> Categoria: ${eventDetails.category}</p>   
            <p class="card-text"> Lugar: ${eventDetails.place}</p> 
            <p class="card-text"> Capacidad: ${eventDetails.capacity}</p> 
            <p class="card-text"> Estimar: ${eventDetails.estimate}</p> 
            <p class="card-text"> Asistencia: ${eventDetails.assistance}</p> 
            <p class="card-text"> Precio: $${eventDetails.price}</p>
        </div>
    </div> `

cardDetails.innerHTML = stringHtml