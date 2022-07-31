// Find the last digit of a 4 digit number
//     You are provided a four digit number N only. Your task is to print out the last digit of that number.
//     Note: You have to complete Last_Digit function. No need to take any input.

// simple method
let number = 4521;
const lastDigit=number%10;
console.log(lastDigit);

// with the help of function
const Last_Digit = (n) => {
    return n%10;
 };
 console.log(Last_Digit(1235));