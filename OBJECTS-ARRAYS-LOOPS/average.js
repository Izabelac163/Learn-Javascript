// 3. Average => sum of items / no. of items
// avg of 12,34,36, 55 -> sum/four
// Create a function that takes an array of numbers and prints out the average

/*function findTheAverageTest(a, b, c, d) {
  var sum = a + b + c + d;
  var devided = sum / 4;
  console.log(devided);
} */

//array[21, 32, 44]
//array[0]+array[1]+array[2] /  array.length

/*function theAverage(array) {
  reduce(theAverage(array));
  var devided = array / array.length;
  console.log(devided);
}

theAverage(numArray);
*/
var numArray = [12, 26, 13, 16];
function theAverage(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  var average = sum / array.length;
  return average;
}
var result = theAverage(numArray);
console.log(result);
