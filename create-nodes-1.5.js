const divb = document.createElement("div")
divb.className = "blue"
const divr = document.createElement("div")
divr.className = "red"
const divg = document.createElement("div")
divg.className = "green"

divb.textContent = "Я вложен"
divg.append(divb)
divr.append(divg)

console.log(divr)