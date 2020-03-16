// #
// ##

var tempStars = " ";

function createLoopingTriangle() {
  for (i = 0; i <= 4; i++) {
    // how many times j to be true for each time of i ?
    for (j = 0; j + 2 < i; j++) {
      tempStars = tempStars + "* ";
      console.log(`i + 2 is ${i + 2}: j is ${j} ::  ${tempStars}`);
    }
  }
}

createLoopingTriangle();
