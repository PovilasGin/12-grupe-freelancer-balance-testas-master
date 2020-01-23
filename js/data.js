const account = [
    { month: 1, name: 'Sausis', income: 200, expense: 50 },
    { month: 2, name: 'Vasaris', income: 50 },
    { month: 3, name: 'Kovas', income: 450, expense: 200 },
    { month: 4, name: 'Balandis', income: 10, expense: 300 },
    { month: 5, name: 'Geguze', income: 150, expense: 50 },
    { month: 6, name: 'Birzelis', expense: 50 },
    { month: 7, name: 'Liepa', expense: 50 },
    { month: 8, name: 'Rugpjutis', income: 450, expense: 120 },
    { month: 9, name: 'Rugsejis', income: 700, expense: 400 },
    { month: 10, name: 'Spalis', income: 150 },
    { month: 11, name: 'Lapkritis', income: 150, expense: 30 },
    { month: 12, name: 'Gruodis', expense: 200 }
];

// const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis'];


generateMonths(account);

function generateMonths(data){
    let HTML = '';
    
    // if (!empty(data.income)) {
    //    data.income = 0;
    // }

    for (let i = 0; i < data.length; i++) {
        const months = data[i]
        
        if(months.income == undefined){
            months.income = 0 
        }
        if(months.expense == undefined){
            months.expense = 0
        }

        HTML += `<div class="table-row">
                    <div class="cell">${months.month}</div>
                    <div class="cell">${months.name}</div>
                    <div class="cell">${months.income}</div>
                    <div class="cell">${months.expense}</div>
                    <div class="cell">${months.income - months.expense}</div>
                </div>`



        document.querySelector('#table').innerHTML = HTML;
    }
}
