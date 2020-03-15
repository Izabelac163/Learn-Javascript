"use strict";
// create a function that takes a fruit object and adds it to the fruit Object List
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

var orange = {
  name: "orange",
  weight: "300g",
  color: "red",
  price: "$4"
};

var fruitList = [apple, cherry, grape, strawberry];

function addFruitTOList(list) {
  fruitList.push(orange);
  console.log(fruitList);
}

addFruitTOList(fruitList);
