const buttons = document.querySelectorAll(".buttons button");
const menu = document.getElementById("menu")
const operations = document.querySelectorAll(".operation-button")

var currentNumber = ""
var previousNumber = ""
var total = 0
var prevOperation = ""


function backspace(menu) {
    console.log("made it to backspace function")
    let newNumber = menu.value.slice(0, -1)
    return newNumber
}

function isNumber(value){
    return !isNaN(value)
}



function handleButton(button){
    if (isNumber(button.textContent)){
        currentNumber += button.textContent
        console.log("currentNumber: ", currentNumber)
        menu.value = currentNumber
    }
    else if (button.classList.contains("operation-button")){
        handleOperationButton(button)
    }
    else if (button.textContent === "BACK") {
        newNumber = backspace(menu)
        currentNumber = newNumber
        
    }
    else if(button.textContent === "CLEAR") {
        currentNumber = ""
    }
}

function handleOperationButton(button){
    let op = button.textContent
    console.log("made it to handleOperationButton")

    switch(op){
        case "+":
        case "-":
        case "*":
        case "/":
            previousNumber = currentNumber  //storing previous number
            currentNumber = "" //clearing the current number
            menu.value = "" //clearing the menu
            prevOperation = op
            console.log("previouis number after pressing + : ", previousNumber)
            break;
            case "=":
                total = calculateTotal(parseFloat(previousNumber), parseFloat(currentNumber), prevOperation)
                menu.value = total.toString()
                currentNumber = total.toString()
                break
            }
}


function calculateTotal(previousNumber, currentNumber, prevOperation){
    switch(prevOperation){
        case "+":
            total = parseInt(previousNumber) + parseInt(currentNumber)
            break
        case "-":
            total = parseInt(previousNumber) - parseInt(currentNumber)
            break
        case "*":
            total = parseInt(previousNumber) * parseInt(currentNumber)
            break
        case "/":
            total = parseInt(previousNumber) / parseInt(currentNumber)
            break
    }
    return total

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        handleButton(button)
    })
})