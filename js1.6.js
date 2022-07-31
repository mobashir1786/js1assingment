//       Find the remainder
//    You are provided with two numbers A and B where A as  divisor and B as  dividend.Your task is find the remainder.
//    Note: You have to complete Find_the_remainder function. No need to take any input.

// simple method
let divisor=15;
let dividend=64;
const rem=dividend%divisor;
console.log(rem);

// with the help of function
const Find_the_remainder = (a,b) => {
    return b%a;
};
 console.log(Find_the_remainder(5,26));