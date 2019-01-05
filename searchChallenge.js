let outputElement = document.getElementById("output")
let searchInput = document.getElementById("searchInput")

// searchInput.addEventListener("input", updateResults)

function updateResults() {

    const query = event.target.value /*.toLowerCase()*/
    // console.log(query)

    salesByWeek.forEach(sale => {

        for (const entry of Object.entries(sale.sales_agent)){
            // console.log(entry)

            if(entry.includes(query)){

                outputElement.innerHTML += "<hr/>"

                outputElement.innerHTML += `<h3>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h3>`;

                for (const entry of Object.entries(sale.vehicle)) {
                    console.log(entry)
                    outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
                }

                outputElement.innerHTML += `Gross Profit: $${sale.gross_profit}`
            }
        }
    })
// }
}