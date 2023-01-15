

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let textTotal = document.getElementById("total")
let count = 0
let countTotal = []
let showTotal;

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    countTotal.push(count)
    showTotal = countTotal.reduce((partialSum, a) => partialSum + a, 0)
    textTotal.textContent = "Total: " + showTotal
    count = 0
}


