const div = document.createElement("div")
const ul = document.createElement("ul")
div.append(ul)
const li1 = document.createElement("li")
const link1 = document.createElement("a")
link1.href = "https://instagram.com/intocode"
link1.textContent = "наш инстаграм"
li1.append(link1)
const li2 = document.createElement("li")
const link2 = document.createElement("a")
link2.href = "https://intocode.ru"
link2.textContent = "наш сайт"
ul.append(li1, li2)
li2.append(link2)
document.body.append(div)
console.log(div)