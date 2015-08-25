

var Meal = function(price, taxPercent, tipPercent){
  this.price = price;
  this.taxPercent = taxPercent;
  this.tipPercent = tipPercent;
  this.tip = null;
  this.tax = null;
  this.total = null;
  this.subTotal = null;
};

Meal.prototype.calcTip = function(){
  this.tip = this.calcSubTotal() * this.tipPercent;
  return this.tip;
};

Meal.prototype.calcTax = function(){
  this.tax = this.price * this.taxPercent;
  return this.tax;
};

Meal.prototype.calcSubTotal = function(){
  this.subTotal = this.calcTax()+this.price
  return this.subTotal;
};

Meal.prototype.calcTotal = function(){
  this.total = this.calcSubTotal()+this.calcTip();
  return this.total;
};



var Server = function(name){
  this.name = name;
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
    tips += this.meals[i].tip;
  };
  this.totalTips = tips;
  return tips;
};

Server.prototype.sumSales = function(){
  var total = 0;
  for (var i = 0; i < this.meals.length; i++) {
    total += this.meals[i].subTotal;
  };
  this.totalSales = total;
  return total;
};

Server.prototype.calcAvgTip = function(){
  return this.sumTips()/this.meals.length;
};
Server.prototype.calcTipRatio = function(){
  return ((this.sumTips()/this.sumSales()) * 100).toFixed(2);
};

