
  var earningsCalc = angular.module("earningsCalc", []);

  earningsCalc.controller("earningsController", ['$scope', function($scope){


      // set initial values
      function init() {
        $scope.mealPrice = 0;
        $scope.taxRate = 0;
        $scope.tipPercent = 0;
        $scope.subTotal = 0;
        $scope.tip = 0;
        $scope.total = 0;
        $scope.avgTip = 0;
        $scope.totalTips = 0;
        $scope.mealCount = 0;
        $scope.tipRatio = 0;

      }


      function calculateMealTotals() {
        var meal = new Meal($scope.mealPrice, $scope.taxRate, $scope.tipPercent);
        waiter.addMeal(meal);
        $scope.subTotal = meal.calcSubTotal();
        $scope.tip = meal.calcTip();
        $scope.total = meal.calcTotal();
      }

      function calculateServerTotals(){
      $scope.avgTip = waiter.calcAvgTip();
      $scope.totalTips = waiter.sumTips();
      $scope.mealCount = waiter.meals.length;
      $scope.tipRatio = waiter.calcTipRatio();
      console.log(waiter.totalTips, waiter.totalSales);

      }

      $scope.calculateTotals = function(){
        calculateMealTotals()
        calculateServerTotals()
      };


      waiter = new Server();
      init()





  }]);