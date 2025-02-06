const buttons = document.querySelectorAll(".buttons button");
const menu = document.getElementById("menu")
const operations = document.querySelectorAll(".operation-button")

let number = ""

operations.forEach((operation) => {
    console.log(operation.textContent)
})







function add(numbers){
    sum = 0
    numbers.forEach((number) => {
        sum += number
    })
}

function subtract(numbers){
    difference = 0
    numbers.forEach((number) => {
        difference -= number
    })
}



    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            number += button.textContent
            menu.textContent = number
        })
    })