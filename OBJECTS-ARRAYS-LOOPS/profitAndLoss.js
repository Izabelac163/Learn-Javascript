// Profit and Loss -> sale price - cost price => profit
// Loss -> cost price - sale price ->
// 4. Create a function which will take a cost and a sale price and print out if its
// a profit sale or loss sale and how much is the profit or loss

function profitOrLoss(cost, salePrice) {
  if (cost > salePrice) {
    var difference = cost - salePrice;
    console.log(difference, "loss");
  } else {
    var more = salePrice - cost;
    console.log(more, "profit");
  }
}
profitOrLoss(60, 61);

// if cost > salePrice = loss
// else = profit
