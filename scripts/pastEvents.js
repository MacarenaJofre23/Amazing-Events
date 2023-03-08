let contenedorMainPast = document.getElementById("mainPast")

let arrayPastEvents = filterPastEvents(data.currentDate,data.events)

contenedorMainPast.innerHTML = dibujarCard(arrayPastEvents)

function filterPastEvents(currentDate,arrayEvents){
    
    let array = []
    for (evento of arrayEvents) {

        if(evento.date < currentDate){
            array.push(evento)
        }

    }

    return array
}