// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');


  var totalChargesArray = [];
  var george = new Server("George");

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

      var newMeal = new Meal(mealPrice, taxRate, tipPercent);
      george.addMeal(newMeal);

        // put totals on DOM
    $($(".totals p")[0]).html("Subtotal: "+"<span>"+newMeal.calcSubTotal()+"</span>");
    $($(".totals p")[1]).html("Tip: "+"<span>"+newMeal.calcTip()+"</span>");
    $($(".totals p")[2]).html("Total: "+"<span>"+newMeal.calcTotal()+"</span>");






    console.log(george.meals[0].tip)


    // put running totals on DOM
    $($(".totals p")[3]).html("Total Tips: " + "<span>" + george.sumTips() + "</span>");
    $($(".totals p")[4]).html("Meal Count: " + "<span>" + george.meals.length + "</span>");
    $($(".totals p")[5]).html("Average Tip: " + "<span>"+ george.calcAvgTip() + "</span>");


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


