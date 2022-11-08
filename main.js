

var sideOptions = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Sweet Potato Fries', 'Crispy Brussel Sprouts'];
var mainOptions = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Ramen', 'Curry', 'Fried Rice', 'nothing, just Order Pizza', 'Fried Chicken', 'Baked Salmon and Mushrooms'];
var dessertOptions = ['Baklava', 'Apple Pie', 'Flan', 'Pumpkin Pie', 'Mint Ice Cream', 'Chocolate Cupcakes', 'Skittles'];


// var sideButton = document.querySelector(".radio-button-side")
// var mainDishButton = document.querySelector(".radio-button-main")
// var dessertButton = document.querySelector(".radio-button-dessert")
// var entireMealButton = document.querySelector(".radio-button-meal")

var letsCook = document.querySelector(".lets-cook-btn")

var selectedRadioBtn = document.querySelectorAll("input")




letsCook.addEventListener('click', letsCookButton)



function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function randomFood(dishesArrays){
    var randomIndex = getRandomIndex(dishesArrays);
    return dishesArrays[randomIndex];
}



//handler!
function letsCookButton(){
   
var radioBtn = document.querySelectorAll("input[name='group']");
var imgHidden = document.querySelector("#cookpot-img");
var rightText = document.querySelector("#rightText");

if (radioBtn[0].checked){
    imgHidden.classList.add("hidden")
    rightText.innerText = `You should make ${randomFood(sideOptions)}`
} else if (radioBtn[1].checked) {
    imgHidden.classList.add("hidden")  
    rightText.innerText = `You should make ${randomFood(mainOptions)}`
} else if (radioBtn[2].checked) {
    imgHidden.classList.add("hidden")  
    rightText.innerText = `You should make ${randomFood(dessertOptions)}`
} else if (radioBtn[3].checked) {
    imgHidden.classList.add("hidden")
    rightText.innerText = `You should make ${randomFood(sideOptions)} with a side of ${randomFood(mainOptions)} and ${randomFood(dessertOptions)} for dessert!`
}
}


// clear button: new button on right flexbox, event listener, on click it should bring the cookpot back and get rid of the text

