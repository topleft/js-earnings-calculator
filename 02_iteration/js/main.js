// // add scripts

// $(document).on('ready', function() {
//   console.log('sanity check!');


//   var george = new Server("George");
//   var totalChargesArray = [];

//   $("form").on("submit", function(e){
//     e.preventDefault();

//     //--------------------//
//     // grab input values //
//     //------------------//

//     formValues = $(".form-input")
//     var mealPrice = parseInt($(formValues[0]).val());
//     var taxRate = parseFloat($(formValues[1]).val());
//     var tipPercent = parseFloat($(formValues[2]).val());

//     var newMeal = new Meal(mealPrice, taxRate, tipPercent);
//     george.addMeal(newMeal);

//     //--------------------//
//     // put totals on DOM //
//     //------------------//

//     // $($(".totals p")[0]).html("Subtotal: "+"<span>"+newMeal.calcSubTotal()+"</span>");
//     // $($(".totals p")[1]).html("Tip: "+"<span>"+newMeal.calcTip()+"</span>");
//     // $($(".totals p")[2]).html("Total: "+"<span>"+newMeal.calcTotal()+"</span>");


//     //----------------------------//
//     // put running totals on DOM //
//     //--------------------------//

//     // $($(".totals p")[3]).html("Total Tips: " + "<span>" + george.sumTips() + "</span>");
//     // $($(".totals p")[4]).html("Meal Count: " + "<span>" + george.meals.length + "</span>");
//     // $($(".totals p")[5]).html("Average Tip: " + "<span>"+ george.calcAvgTip() + "</span>");


//     //---------------------//
//     // clear after submit //
//     //-------------------//

//     // for (var i = 0; i < $(".form-input").length; i++) {
//     //   $($(".form-input")[i]).val("");
//     // }

//   // close form submit e handler
//   });



//   // clear button
//   // $($(".btn")[1]).on("click", function(e) {
//   // e.preventDefault();
//   //   for (var i = 0; i < $(".form-input").length; i++) {
//   //     $($(".form-input")[i]).val("");
//   //   }
//   // });


//   // $($(".btn")[2]).on("click", function(e) {
//   //   e.preventDefault();
//   //   totalChargesArray = [];
//   //   for (var i = 0; i < $(".totals span").length; i++) {
//   //     $($(".totals span")[i]).html("");
//   //   };

//   // });



// });






//   function calcTotalCharges (mealPrice, taxRate, tipPercent){
//   var totalCharges = {}

//   totalCharges.subTotal = (mealPrice*taxRate) + mealPrice;
//   totalCharges.tip = mealPrice*tipPercent;
//   totalCharges.total = totalCharges.subTotal + totalCharges.tip;
//   console.log(totalCharges);
//   return totalCharges;
// }



//   var george = new Server("George");
//   var totalChargesArray = [];

//   $("form").on("submit", function(e){
//     e.preventDefault();

//     //--------------------//
//     // grab input values //
//     //------------------//

//     formValues = $(".form-input")
//     var mealPrice = parseInt($(formValues[0]).val());
//     var taxRate = parseFloat($(formValues[1]).val());
//     var tipPercent = parseFloat($(formValues[2]).val());

//     var newMeal = new Meal(mealPrice, taxRate, tipPercent);
//     george.addMeal(newMeal);

//     //--------------------//
//     // put totals on DOM //
//     //------------------//

//     // $($(".totals p")[0]).html("Subtotal: "+"<span>"+newMeal.calcSubTotal()+"</span>");
//     // $($(".totals p")[1]).html("Tip: "+"<span>"+newMeal.calcTip()+"</span>");
//     // $($(".totals p")[2]).html("Total: "+"<span>"+newMeal.calcTotal()+"</span>");


//     //----------------------------//
//     // put running totals on DOM //
//     //--------------------------//

//     // $($(".totals p")[3]).html("Total Tips: " + "<span>" + george.sumTips() + "</span>");
//     // $($(".totals p")[4]).html("Meal Count: " + "<span>" + george.meals.length + "</span>");
//     // $($(".totals p")[5]).html("Average Tip: " + "<span>"+ george.calcAvgTip() + "</span>");


//     //---------------------//
//     // clear after submit //
//     //-------------------//

//     // for (var i = 0; i < $(".form-input").length; i++) {
//     //   $($(".form-input")[i]).val("");
//     // }
//   });



//   // clear button
//   // $($(".btn")[1]).on("click", function(e) {
//   // e.preventDefault();
//   //   for (var i = 0; i < $(".form-input").length; i++) {
//   //     $($(".form-input")[i]).val("");
//   //   }
//   // });


//   // $($(".btn")[2]).on("click", function(e) {
//   //   e.preventDefault();
//   //   totalChargesArray = [];
//   //   for (var i = 0; i < $(".totals span").length; i++) {
//   //     $($(".totals span")[i]).html("");
//   //   };

//   // });



// // });


