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

    var mealPrice = parseInt(mealDetails["meal-price"]);
    var taxRate = parseFloat(mealDetails["meal-taxrate"]);
    var tipPercent = parseFloat(mealDetails["meal-tiprate"]);


    //calc totals
    var totalCharges = calcTotalCharges(mealPrice, taxRate, tipPercent);
    totalChargesArray.push(totalCharges);

    // put totals on DOM
    $($(".totals p")[0]).html("Subtotal: "+"<span>"+totalCharges.subTotal+"</span>");
    $($(".totals p")[1]).html("Tip: "+"<span>"+totalCharges.tip+"</span>");
    $($(".totals p")[2]).html("Total: "+"<span>"+totalCharges.total+"</span>");

    // calc runnung totals
    var earnings = calcTotalEarnings(totalChargesArray);
    // put running totals on DOM
    $($(".totals p")[3]).html("Total Tips: " + "<span>" + earnings.totalTips + "</span>");
    $($(".totals p")[4]).html("Meal Count: " + "<span>" + earnings.mealCount + "</span>");
    $($(".totals p")[5]).html("Average Tip: " + "<span>"+ earnings.avgTip + "</span>");

    earnings = {}

        // clear after submit
    for (var i = 0; i < $(".form-input").length; i++) {
      $($(".form-input")[i]).val("");
    }

  });



  // clear button
  $($(".btn")[1]).on("click", function(e) {
  e.preventDefault();
    for (var i = 0; i < $(".form-input").length; i++) {
      $($(".form-input")[i]).val("");
    }
  });


  $($(".btn")[2]).on("click", function(e) {
    e.preventDefault();
    totalChargesArray = [];
    for (var i = 0; i < $(".totals span").length; i++) {
      $($(".totals span")[i]).html("");
    };

  });

});


