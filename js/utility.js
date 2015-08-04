var mealPrice = parseInt(mealDetails["meal-price"])
var taxRate = parseFloat(mealDetails["meal-taxrate"])
var tipPercent = parseFloat(mealDetails["meal-tiprate"])


var total = subTotal + tip

function calcSubTotal (mealPrice, taxRate) {
  return (mealPrice*taxRate) + mealPrice;
}

function calcTip (mealPrice, tipPercent) {
  return (mealPrice * tipPercent);
}

function calTotal (subTotal, tip) {
  return (subTotal + tip);
}