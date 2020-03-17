// #
// ##

var tempStars = " ";
var emptySpace = " ";
function createLoopingTriangle() {
  for (i = 4; i >= 1; i--) {
    // how many times j to be true for each time of i ?
    for (j = 0; j < i; j++) {
      emptySpace += " ";
      for (k = 0; k < i; ) tempStars = tempStars + "*";
      // console.log(`i is ${i}: j is ${j} ::  ${tempStars}`);
    }
    console.log(tempStars);
  }
}

createLoopingTriangle();
