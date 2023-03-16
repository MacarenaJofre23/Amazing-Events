//variables capturadas 
let containerMain = document.getElementById('main')
let input = document.getElementById('addText')
//let checkContainer = document.getElementById('checkContainer')

//Llamando a eventos
  input.addEventListener('input', superFilter)

  checkContainer.addEventListener('change', superFilter)

//Llamando Funciones
  crearCheckBox(data.events)
  drawCards(data.events)
  
//CREANDO FUNCIONES

//Funcion Dibujar Tarjetas
function drawCards(arrayEvents){
    if(arrayEvents.length == 0){
        containerMain.innerHTML = "<h1> No hay elementos buscados </h1>"
        return
    }
    let containerHTML= ""
    arrayEvents.forEach((event) => {
      containerHTML += `
        <div class="card m-5 col-3" style="width: 18rem;">
                    <img src="${event.image}" class="card-img" alt="ImageEvent">
                    <div class="card-body" id= "eventosFil">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text"> ${event.description}</p>
                        <p class="card-text"> Date of Event: ${event.date}</p>
                        <p class="card-text"> Precio: $${event.price}</p>
                        <p class="card-text"> Categoria:<b> ${event.category}</b></p> 
                    </div>

                    <a class="btn btn-primary" href="./details.html?id=${event._id}">Details</a>
        </div> `
    })
    containerMain.innerHTML =  containerHTML
}

//Funcion Filtrar con Texto
function textFilter(array,text){
let arrayFilter = array.filter(element => element.name.toLowerCase().includes(text.toLowerCase()))
return arrayFilter
}

//Funcion craer CheckBox
function crearCheckBox(array){
   let arrayCategory =  array.map(elemento => elemento.category)
   console.log(arrayCategory)
   let setCategories = new Set(arrayCategory)
   console.log(setCategories)
   let checks = ""
   setCategories.forEach(elemento => {
    checks += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" role="switch" id="inputCheck" value="${elemento}">
    <label class="form-check-label" for="${elemento}">${elemento}</label>
  </div>  `

   
   })
   checkContainer.innerHTML = checks
}
//Funcion Filtrar Categoria
function filterCategory(array){
//let checkboxes = document.getElementById("inputCheck[type='checkbox']")
let checkboxes = document.querySelectorAll("input[type='checkbox']")
let arrayChecks = Array.from(checkboxes)
let checksCheckeados = arrayChecks.filter(check => check.checked)
console.log(checksCheckeados)
if(checksCheckeados.length == 0){
  return array
}
let categories = checksCheckeados.map(check => check.value)
console.log(categories)
let arrayFilter = array.filter(element => categories.includes(element.category))
console.log('fil')
console.log(arrayFilter)
return arrayFilter
}

//Filtrar Primer y Segundo Filtro
function superFilter(){
  let firstFilter = textFilter(data.events,input.value)
    let secondFilter = filterCategory(firstFilter)
    drawCards(secondFilter)
}