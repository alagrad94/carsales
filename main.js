let outputElement = document.getElementById("output");

// allCars.forEach(car => {

//     for (const value of Object.values(car)) {
//         outputElement.innerHTML += `<div>${value}</div>`
//       }
// });

// const firstCar = allCars[0]

// // Now iterate its keys
// outputElement.innerHTML += "<h1>Properties</h1>"
// for (const key of Object.keys(allCars[0])) {
//   outputElement.innerHTML += `<div>${key}</div>`
// }

// // Iterate the array of cars. Individual objects stored in `car`.
// outputElement.innerHTML += "<h1>Car List</h1>"
// allCars.forEach(car => {

//     // Iterate all of the values of the current car
//     for (const value of Object.values(car)) {
//       outputElement.innerHTML += `<div>${value}</div>`
//     }
// })

// outputElement.innerHTML += "<h1>Car List</h1>"

// allCars.forEach(car => {
//     outputElement.innerHTML += "<hr/>"

//     for (const entry of Object.entries(car)) {
//         console.log(entry)
//         outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
//     }
// })

outputElement.innerHTML += "<h1>Weekly Sales Report</h1>"


salesByWeek.forEach(sale => {

    outputElement.innerHTML += "<hr/>"

    outputElement.innerHTML += `<h3>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h3>`;
    for (const entry of Object.entries(sale.vehicle)) {
        console.log(entry)
        outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }

    outputElement.innerHTML += `Gross Profit: $${sale.gross_profit}`
})