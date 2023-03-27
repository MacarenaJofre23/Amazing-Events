let oneTable = document.getElementById("firstTable")
let twoTable = document.getElementById("secondTable")
let threeTable = document.getElementById("thirdTable")

let eventos = ""

async function fromApi() {
   await fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => response.json())
      .then(events => eventos = events)
   const Events = eventos.events
   let currentDate = eventos.currentDate
   let arrayEventosFuturos = Events.filter(evento => currentDate < evento.date)
   let arrayEventosPasados = Events.filter(evento => currentDate > evento.date)

   let arrayEventoFuturo = []
   arrayEventosFuturos.filter(event => arrayEventoFuturo.push(
      {
         name: event.name,
         category: event.category,
         price: event.price,
         revenues: event.estimate * event.price,
         estimate: event.estimate,
         capacity: event.capacity,
         percentage: ((event.estimate * 100) / event.capacity).toFixed(1)
      }))
   let arrayEventoPasado = []
   arrayEventosPasados.filter(evento => arrayEventoPasado.push(
      {
         name: evento.name,
         category: evento.category,
         price: evento.price,
         revenues: evento.assistance * evento.price,
         assistance: evento.assistance,
         capacity: evento.capacity,
         percentage: ((evento.assistance * 100) / evento.capacity).toFixed(1)
      }))

   function firstTable() {
      let event = ""
      event = arrayEventoPasado.filter(param => param.percentage).sort((a, b) => b.percentage - a.percentage)

      capacityE = ""
      capacityE = arrayEventoPasado.filter(param => param.capacity).sort((a, b) => b.capacity - a.capacity)

      oneTable.innerHTML = `
    <tr>
      <td>${ event[0].name + " " +  event[0].percentage}%</td>
       <td>${ event[ event.length - 1].name + " " +  event[ event.length - 1].percentage}%</td>
       <td>${capacityE[0].name + " capacity " + capacityE[0].capacity}</td>
    <tr>`
   }

   firstTable()


   function secondTable() {
      var category = arrayEventoFuturo.map(categoryE => categoryE.category)
      const arrayCategory = new Set(category)
      category = arrayCategory

      let percentageCategory = [];
      let incomePercentage = [];
      category.forEach(category => {
         percentageCategory.push({
            category: category,
            data: arrayEventoFuturo.filter(data => data.category == category)
         })
      })

      percentageCategory.map(valor => {
         incomePercentage.push({
            category: valor.category,
            estimateRevenue: valor.data.map(item => item.estimate * item.price),
            estimate: valor.data.map(item => item.estimate),
            capacity: valor.data.map(item => item.capacity)
         })
      })

      incomePercentage.forEach(category => {
         let totalEstimate = 0
         category.estimate.forEach(estimate => totalEstimate += Number(estimate))
         category.estimate = totalEstimate

         let incomeEstimate = 0
         category.estimateRevenue.forEach(incEstimate => incomeEstimate += Number(incEstimate))
         category.estimateRevenue = incomeEstimate

         let totalCapacityUp = 0
         category.capacity.forEach(capacity => totalCapacityUp += Number(capacity))
         category.capacity = totalCapacityUp

         category.percentageAssist = ((totalEstimate * 100) / totalCapacityUp).toFixed(2)
      })

      let categoryUpcoming = ""
      categoryUpcoming = incomePercentage.filter(category => category.percentageAssist).sort((a, b) => b.percentageAssist - a.percentageAssist)


      var tablaUpcoming = ""
      categoryUpcoming.forEach(element => {
         element.categoryUpcoming
         tablaUpcoming += `
   <tr>
      <td>${element.category}</td>
      <td>$ ${element.estimateRevenue}</td>
      <td>${element.percentageAssist}%</td>
   <tr>
`})
   twoTable.innerHTML = tablaUpcoming;
   }


   secondTable()


   function thirdTable() {
      var category = arrayEventoPasado.map(category => category.category)
      const arrayCategory = new Set(category)
      category = arrayCategory

      let percentageCategory = [];
      let incomePercentage = [];
      category.forEach(category => {
         percentageCategory.push({
            category: category,
            data: arrayEventoPasado.filter(data => data.category == category)
         })
      })
      percentageCategory.map(valor => {
         incomePercentage.push({
            category: valor.categoria,
            revenue: valor.data.map(data => data.assistance * data.price),
            assistance: valor.data.map(data => data.assistance),
            capacity: valor.data.map(data => data.capacity)
         })
      })

      incomePercentage.forEach(category => {
         let totalAssist = 0
         category.assistance.forEach(attendance => totalAssist += Number(attendance))
         category.assistance = totalAssist

         let totalRevenue = 0
         category.revenue.forEach(ingresos => totalRevenue += Number(ingresos))
         category.revenue = totalRevenue

         let totalCapacity = 0
         category.capacity.forEach(capacity => totalCapacity += Number(capacity))
         category.capacity = totalCapacity

         category.percentageAssist = ((totalAssist * 100) / totalCapacity).toFixed(2)
      })
   
      let categoryPast = ""
      categoryPast  =  incomePercentage.filter(category => category.percentageAssist).sort((a, b) => b.percentageAssist - a.percentageAssist)
  

      var tablaPast = ""
      categoryPast .forEach(element => {
         element.categoryPast 
         tablaPast += `
   <tr>
     <td>${element.category}</td>
     <td>$ ${element.revenue}</td>
     <td>${element.percentageAssist}%</td>
   <tr>
 `})
  threeTable.innerHTML = tablaPast;
   }
   thirdTable()
}

fromApi()