function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   //Returns the sum of 3 numbers
   /* Test for multi line 
   comments*/
   return input1 + input2;
}

function subtract(sub1, sub2) {
   //return should be the difference of the two values
   return sub1 - sub2;
}

function multiply(num1, num2, num3) {
   //return should be the product of the three values
   return num1 * num2 * num3;
}

function divide(div1, div2) {
   //return should be the quotient of the two values
   return div1 / div2;
}

function increment(myValue) {
   //return should add one to value
   myValue++;
   return myValue;
}
function decrement(myValue) {
   //return should add one to value
   myValue--;
   return myValue;
}

function multiDecimal(dec1, dec2) {
   //return should multiple two Decimals
   return dec1 * dec2;
}

function divDecimal(dec1, dec2, dec3) {
   //returns quotient of 3 decimals
   return dec1 / dec2 / dec3;
}

//fix these
function concatenate(adj1, noun1) {
   //will concatenate the two inputs

   return adj1 + " " + noun1;
}

function concatenatePlusEquals(name1) {
   //return should concatenate adjective with phrase

   return (name1 += " is the GOAT");
}

function constructString(fruit) {
   //return should subtract 100 from number typed
   return "My favorite fruit is a/an " + fruit + " because it is delicious.";
}

function findLength(word1, word2) {
   //return should show length of each word
   return word1.length + ", " + word2.length;
}

function firstLetter(word1, word2, word3, word4) {
   //will return the first letter of each word
   return word1[0] + word2[0] + word3[0] + word4[0];
}

function nthLetter(word1, word2, word3, word4) {
   //will return the nth letter of each word
   return word1[3] + " " + word2[4] + " " + word3[2] + " " + word4[1];
}

function lastLetter(word1) {
   //will return the last letter in the input
   return word1[word1.length - 1];
}

function nthToLastLetter(word1, word2, word3, word4) {
   //will return the nth letter of each word
   return (
      word1[word1.length - 3] +
      " " +
      word2[word2.length - 4] +
      " " +
      word3[word3.length - 2] +
      " " +
      word4[word4.length - 1]
   );
}

function pushVar(input1) {
   //will push input to the create list
   team = ["Lakers", " Knicks", " Celtics"];
   team.push(" " + input1);
   return team;
}

function popVar(input) {
   //will add the users input and pop the end of Array
   foodList = ["bananas", "apples", "limes", "strawberry"];
   foodList.pop();
   foodList.push(input);
   return foodList;
}

function shiftVar(input) {
   //will add the users input and shift the front of Array
   foodList2 = ["chicken", " sausage", " pork", " steak"];
   foodList2.shift();
   foodList2.push(input);
   return foodList2;
}

function unshiftVar(input) {
   //will add the users input to the front of array and shift the front of Array
   foodList2 = ["omelete", " waffles", " french toast", " pancakes"];
   foodList2.shift();
   foodList2.unshift(input);
   return foodList2;
}

function listVar(foodie, num1) {
   //will add user input to a shopping list
   foodList3 = [
      ["Apples", 4],
      ["Carrots", 6],
      ["Potatoes", 2],
      ["Milk", 5],
      ["Eggs", 12],
   ];
   foodList3.push(foodie, num1);
   return "[" + foodList3 + "]";
}

function standInLine(input) {
   carList = ["car1", "car2", "car3", "car4"];
   carList.push(input);
   carList.shift();

   return carList;
}
