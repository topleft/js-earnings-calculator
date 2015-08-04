// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');


  $("form").on("submit", function(e){
    e.preventDefault();

    mealDetails = {};

    for (var i = 0; i < $(".form-input").length; i++) {
      var input = $($(".form-input")[i]).serialize();
      var pair = input.split("=");

      mealDetails[pair[0]] = pair[1]
      console.log(mealDetails);
    }

    for (var i = 0; i < $(".form-input").length; i++) {
      $($(".form-input")[i]).val("");
    }
    console.log("hello");

    // var mealPrice = parseInt(mealDetails["meal-price"])
    // var taxRate = parseFloat(mealDetails["meal-taxrate"])
    // var tipPercent = parseFloat(mealDetails["meal-tiprate"])

    // var subTotal = (mealPrice*taxRate) + mealPrice
    // console.log(subTotal);
    // var tip = mealPrice*tipPercent;
    // var total = subTotal + tip



    $($(".totals p")[0]).html("Subtotal: "+subTotal)
    $($(".totals p")[1]).html("Tip: "+tip)
    $($(".totals p")[2]).html("Total: "+total)

  });


    $($(".btn")[1]).on("click", function(e) {
    e.preventDefault();
      for (var i = 0; i < $(".form-input").length; i++) {
        $($(".form-input")[i]).val("");
      }
    console.log("hello");
    });

});


