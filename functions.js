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

function pushVar(team1, teams) {
   //will push input to the create list
   teams = ["Lakers", "Knicks", "Celtics"];
   pushVar.push(team1);
   return;
}
//
