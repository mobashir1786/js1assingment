//     Check the conditons
// You are given two numbers A and B. You need to do the following checks:
// if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.Use operator to do this.
// Note: You have to complete Check function. No need to take any input.

// simple method
let firstNumber = 50;
let secondNumber = 20;
const condition = firstNumber % 10 == 0 || secondNumber % 10 == 0 ? true : false;
console.log(condition)

// with the help of function
const Check = (A, B) => {
    return A % 10 === 0 || B % 10 === 0 ? true : false;
};
console.log(Check(25,35))