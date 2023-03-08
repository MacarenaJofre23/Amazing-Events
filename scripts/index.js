let contenedorMain = document.getElementById("main")

function dibujarCard(arrayEvents){
    let contenidoHTML= ""
    for (evento of arrayEvents) {

        contenidoHTML += `
        <div class="card m-5 col-3" style="width: 18rem;">
                    <img src="${evento.image}" class="card-img" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.date}</p>
                        <p class="card-text">${evento.description}</p>               
                    </div>
                </div> `
    }

    return contenidoHTML
}

contenedorMain.innerHTML = dibujarCard(data.events)
