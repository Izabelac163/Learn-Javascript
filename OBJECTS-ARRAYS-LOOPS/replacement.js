// 2. Create a fruit Array - Then create a function that takes a fruit name and position
// and replaces the fruit input in the Array at the given position
// Example: replaceFruit(fruitName, position)
//  List => ['grapes', 'cherry', 'banana', 'pineapple']
// replaceFruit('apple', 3) -> Replaces banana with apple

var fruitArray = ["Apple", "Banana", "Orange"];

fruitArray[2] = "Grape";

console.log(fruitArray);

function replaceFruit(array, position, fruit) {
  array[position] = fruit;
  return array;
}

var newArray = replaceFruit(fruitArray, 1, "Plum");

console.log(newArray);
