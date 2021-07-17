let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(quote)

}
catTalk();


//set default parameters for a function


const increment = (number, value=1) => number + value; 
console.log(increment(5,2));// output=7
console.log(increment(5)); // output=6
