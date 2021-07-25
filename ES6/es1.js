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
  const [a,b,...arr] = list; //same as splice
  return arr;
}
const arr = removeFirstTwo(source);
console.log("arr = "+arr);


//Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max,min}) => (max + min) / 2.0; 

console.log("half = "+half);


//Create Strings using Template Literals


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for(let i=0; i<arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

//using getters and setters to control access to an object

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(Math.floor(temp))
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
