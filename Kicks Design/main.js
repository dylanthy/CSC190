// WHEN I press the Buy button on a shoe card
let buttons = document.querySelectorAll('shoe-card button')
let total_amount = document.getElementById('total_amount')

let buy = function(){
  total_amount.textContent = "100"
}

for (let button of buttons) {
  button.addEventListener("click", buy)
}

// THEN the "in cart" total increases by the price of the shoe
