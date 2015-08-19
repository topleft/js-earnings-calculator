var code = require('../js/utility.js');


describe('Earnings Calculator', function() {

  it('calculates total meal details', function() {
    expect(code.calcTotalCharges(10,0.2,0.2)).toEqual({"subTotal": 12, "tip": 2, "total": 14});
  });

  it('calculates running totals of all meals', function() {
    expect(code.calcTotalEarnings([{subTotal: 12, tip: 2, total: 14}, {subTotal: 12, tip: 2, total: 14}])).toEqual({totalTips: 4, mealCount: 2, avgTip: 2});
  });

});

