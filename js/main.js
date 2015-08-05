// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var totalChargesArray = [];


  $("form").on("submit", function(e){
    e.preventDefault();

    var mealDetails = {};

    // creates object array
    for (var i = 0; i < $(".form-input").length; i++) {
      var input = $($(".form-input")[i]).serialize();
      var pair = input.split("=");

      mealDetails[pair[0]] = pair[1]
      console.log(mealDetails);
    }
    // clear after submit
    for (var i = 0; i < $(".form-input").length; i++) {
      $($(".form-input")[i]).val("");
    }


    var mealPrice = parseInt(mealDetails["meal-price"]);
    var taxRate = parseFloat(mealDetails["meal-taxrate"]);
    var tipPercent = parseFloat(mealDetails["meal-tiprate"]);



    var totalCharges = calcTotalCharges(mealPrice, taxRate, tipPercent);
    totalChargesArray.push(totalCharges);

    $($(".totals p")[0]).html("Subtotal: "+totalCharges.subTotal);
    $($(".totals p")[1]).html("Tip: "+totalCharges.tip)
    $($(".totals p")[2]).html("Total: "+totalCharges.total);

    console.log(totalChargesArray);
    var earnings = calcTotalEarnings(totalChargesArray);

    $($(".totals p")[3]).html("Total Tips: "+earnings.totalTips);
    $($(".totals p")[4]).html("Meal Count: "+earnings.mealCount)
    $($(".totals p")[5]).html("Average Tip: "+earnings.avgTip);

  });

    // clear button
    $($(".btn")[1]).on("click", function(e) {
    e.preventDefault();
      for (var i = 0; i < $(".form-input").length; i++) {
        $($(".form-input")[i]).val("");
      }
    });

});


