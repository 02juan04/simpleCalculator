var button1 = document.getElementById("one");

let number = ""

button1.addEventListener("click", function(){
    number += this.textContent;

    document.getElementById('menu').textContent = number

})