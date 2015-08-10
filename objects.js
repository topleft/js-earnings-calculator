

var Meal = function(price, taxPercent, tipPercent){
  this.price = price;
  this.taxPercent = taxPercent;
  this.tipPercent = tipPercent;
  this.tip = null;
  this.tax;
  this.total;
};

Meal.prototype.calcTip = function(){
  this.tip = this.price * this.tipPercent
  return (this.tip + this.price);
};

Meal.prototype.calcTax = function(){
  this.tax = this.price * this.taxPercent;
  return this.tax;
};

Meal.prototype.calcSubTotal = function(){
  return this.calcTax+this.price;
};

Meal.prototype.calcTotal = function(){
  this.total = this.calcSubTotal+this.calcTip;
  return this.total;
};



var Server = function(){
  this.meals = [];
  this.totalTips = 0;
  this.totalSales = 0;
};



Server.prototype.addMeal = function(meal){
  this.meals.push(meal)
};
Server.prototype.sumTips = function(){
  var tips = 0;
  for (var i = 0; i < this.meals.length; i++) {
    tips += this.meals[i].tips;
  };
  this.totalTips = tips;
  return tips
};

Server.prototype.sumSales = function(){
  var tips = 0;
  for (var i = 0; i < this.meals.length; i++) {
    tips += this.meals[i].tips;
  };
  this.totalTips = tips;
  return tips
};

Server.prototype.calcAvgTip = function(){
  return this.sumTips()/this.meals.length
};
Server.prototype.calcTipPercent = function(){
  return this.sumTips()/this.totalSales
};

// fleshing out server totals
// after that integrate into main.js

