const buttons = document.querySelectorAll(".main-buttons");

let number = ""


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        number += button.textContent
        document.getElementById('menu').textContent = number
    })
})

console.log(number)