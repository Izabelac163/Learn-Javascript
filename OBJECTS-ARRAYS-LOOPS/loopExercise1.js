let apple = { name: "apple", color: "red" };
let banana = { name: "banana", color: "yellow" };
let cherry = { name: "cherry", color: "red" };
let guava = { name: "guava", color: "green" };
let pineapple = { name: "pineapple", color: "red" };
let grapes = { name: "grapes", color: "green" };

var fruitList = [apple, banana, cherry, guava, pineapple, grapes];
// print the name and color of the 3rd and 5th fruits
// example: cherry is red and grapes is green

console.log(fruitList[2].name, fruitList[2].color);
console.log(fruitList[5].name, fruitList[5].color);

//1-100 print every 2 number
function everySecondNum() {
  for (i = 0; i < 100; i += 1) {
    i = i + 1;
    console.log(i);
  }
  console.log("finished");
}

everySecondNum();

function backwardsNum() {
  for (i = 100; i > 1; i -= 2) {
    console.log(i);
  }
}
backwardsNum();
