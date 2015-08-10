



function calcTotalCharges (mealPrice, taxRate, tipPercent){
  var totalCharges = {}

  totalCharges.subTotal = (mealPrice*taxRate) + mealPrice;
  totalCharges.tip = mealPrice*tipPercent;
  totalCharges.total = totalCharges.subTotal + totalCharges.tip;
  console.log(totalCharges);
  return totalCharges;
}



function calcTotalEarnings(array){
  var earnings = {};
  var totalEarnings = 0;

  for (var i = 0; i < array.length; i++) {
    totalEarnings += array[i].tip;
  }

  earnings.totalTips = totalEarnings;
  earnings.mealCount = array.length;
  earnings.avgTip = earnings.totalTips/earnings.mealCount;

  return earnings;
}

// module.exports = {
//   calcTotalCharges : calcTotalCharges,
//   calcTotalEarnings : calcTotalEarnings
// }





