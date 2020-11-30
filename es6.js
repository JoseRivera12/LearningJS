//Examples from freecodecamp ES6

//Arrow Functions 
var magic = function() {
  return new Date();
};

//ES6
const magic = () => new Date();

//Arrow with parameters 
const myConcat = (arr1, arr2) => arr1.concat(arr2);

//Arrow function with default parameters
const increment = (number, value=1) => number + value;

//Rest parameters in functions 
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//Prevent object mutation
Object.freeze(obj);

//Variables from objets 
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

//Destructuring Assignment with the Rest Parameter to Reassign Array ElementsPassed
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  return arr;
}

//Pass objects as a function parameter
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (max, min) => (max + min) / 2.0;

//String like template literals
var str = `Hello ${string}`

//Class with constructor and getter and setter
class Vegetable {
  constructor(name) {
    this.name = name;
  }
 
  get vegetal(){
    return this.name;
  }

  set vegetal(newVegetal){
    this.name = newVegetal;
  }
}

// import as default export 
import add from "./math_functions.js";

//Import functions 
import { add, subtract } from './math_functions.js';

//Import everything from a file
import * as myMathModule from "./math_functions.js";

//Promises
const myPromise = new Promise((resolve, reject) => {

});


//Promise with ressolve and reject with then and catch
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
  if(responseFromServer) {
    resolve("We got the data");
  } else{
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});

