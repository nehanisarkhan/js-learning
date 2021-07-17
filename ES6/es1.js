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


//Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  
const {today:{low:lowToday , high:highToday}} = LOCAL_FORECAST;


//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);