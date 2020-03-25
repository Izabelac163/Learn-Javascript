// Profit and Loss -> sale price - cost price => profit
// Loss -> cost price - sale price ->
// 4. Create a function which will take a cost and a sale price and print out if its
// a profit sale or loss sale and how much is the profit or loss

function getInputFromUser(input1, input2) {
  const prompt = require("prompt-sync")();

  input1 = prompt("Enter Cost Price: ");
  input2 = prompt("Enter Sale Price: ");

  return { costPrice: input1, SellPrice: input2 };
}

function profitOrLoss() {
  var cost = 0;
  var salePrice = 0;

  var costAndSalePriceObject = getInputFromUser(cost, salePrice);
  cost = costAndSalePriceObject.costPrice;
  salePrice = costAndSalePriceObject.SellPrice;

  if (cost > salePrice) {
    var difference = cost - salePrice;
    console.log(`You suffered a heavy loss of $ ${difference}`);
  } else {
    var more = salePrice - cost;
    console.log(`You made a profit of $ ${more}`);
  }
}
profitOrLoss();
// if cost > salePrice = loss
// else = profit
