// console log the name and price from a list of 5 fruit items with properties color weight price using array objects and for
// for loops
var apple = {
  name: "apple",
  weight: "300g",
  color: "green/red",
  price: "$4"
};

var grape = {
  name: "grape",
  weight: "20g",
  color: "green/red",
  price: "$4"
};

var cherry = {
  name: "cherry",
  weight: "1000g",
  color: "red",
  price: "$12"
};

var strawberry = {
  name: "strawberry",
  weight: "300g",
  color: "red",
  price: "$4"
};

var fruits = [apple, cherry, strawberry, grape];

function printFruit(fruits) {
  for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i].name, fruits[i].price);
  }
}

printFruit(fruits);
