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


//use the rest parameter with function parameter

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // result=6


//destructuring  assignment to extract values from object

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today,tomorrow} = HIGH_TEMPERATURES;

