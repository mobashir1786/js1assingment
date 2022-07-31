//      Find the first digit of a 4 digit number
//    You are provided a four digit number N only. Your task is to print out the first digit of that number.
//    Note: You have to complete First_Digit function. No need to take any input.

// simple method
let number = 4521;
const rem = (number % 1000);
const firstDigit = (number - rem) / 1000;
console.log(firstDigit);

// with the help of function
const First_Digit = (n) => {
    return (n - (n % 1000)) / 1000;
};