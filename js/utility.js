



function calcTotalCharges (mealPrice, taxRate, tipPercent){
  var totalCharges = {}

  totalCharges.subTotal = (mealPrice*taxRate) + mealPrice;
  totalCharges.tip = mealPrice*tipPercent;
  totalCharges.total = totalCharges.subTotal + totalCharges.tip;
  console.log(totalCharges);
  return totalCharges;
}







