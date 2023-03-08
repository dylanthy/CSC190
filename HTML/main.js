document
//AS A shopper
//WHEN i press buy button on shoe card
//THEN the "in cart" total increases by the price of the shoe
let buttons = document.querySelectorAll("shoe-card button")
for(let button of buttons){
    button.addEventListener("click", buy)
}

let buy = function(){
    total_amount.textContent = "100"
}

let button = document.getElementById("total_amount")
