let contenedorMainUpcoming = document.getElementById("mainUpcoming")

let arrayUpcomingEvents = filterUpcomingEvents(data.currentDate,data.events)

contenedorMainUpcoming.innerHTML = dibujarCard(arrayUpcomingEvents)

function filterUpcomingEvents(currentDate,arrayEvents){
    
    let array = []
    for (evento of arrayEvents) {

        if(evento.date >= currentDate){
            array.push(evento)
        }

    }

    return array
}