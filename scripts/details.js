//captura de variables
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then(detailsEvent => {
    eventosApi = detailsEvent

    let date = eventosApi.events
    let idQuery = new URLSearchParams(location.search).get("id")

    let eventDetails = date.find(element => element._id == idQuery)
   
    let cardDetails =document.getElementById("containerDetails")

cardDetails.innerHTML =

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

  })



