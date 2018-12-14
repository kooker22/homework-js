'use strict'
let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('enter number'); 
    numbers.push(userInput);
} while(userInput !== null);
console.log(numbers);
for(let i = 0; i < numbers.length; i++) {
    total = Number(total) + Number(numbers[i]); 
  
}
console.log(total);