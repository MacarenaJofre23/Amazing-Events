
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then(events => {
    eventosApi = events
    const Eventos = eventosApi.events
    let currentDate = eventosApi.currentDate
    let arrayDate = Eventos.filter(evento => currentDate > evento.date)
    eventPast(arrayDate)
    crearCheckBox(arrayDate)

    function superFilter(){
      let firstFilter = textFilter(arrayDate,input.value)
      let secondFilter = filterCategory(firstFilter)
      eventPast(secondFilter)
    }
    input.addEventListener('input', superFilter)
    checkContainer.addEventListener('change', superFilter)

  })

let contenedorMainPast = document.getElementById('mainPast')
let input = document.getElementById('addText')
let checkContainer = document.getElementById('checkContainer')

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
//Funcion Filtrar con Texto
function textFilter(array,text){
  let arrayFilter = array.filter(element => element.name.toLowerCase().includes(text.toLowerCase()))
  return arrayFilter
  }
//Funcion Filtrar Categoria
function filterCategory(array){
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
  
function eventPast(array) {
  if (array.length == 0) {
    contenedorMainPast.innerHTML =  "<h2> No hay elementos </h2>"
    return
  }
  let pastEvents = ""
  array.forEach(evento => {
    pastEvents += `
    <div class="card m-5 col-3" style="width: 18rem  justify-content-center">
        <img src="${evento.image}" class="card-img" alt="${evento.name}"> 
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <p class"card-text">Date of Event: ${evento.date}</p>
        <p class="card-text">Precio: ${evento.price}</p>  
     </div>
     <a class="btn btn-primary" href="./details.html?id=${evento._id}">Details</a>
  </div>`
    })
  contenedorMainPast.innerHTML = pastEvents
}


