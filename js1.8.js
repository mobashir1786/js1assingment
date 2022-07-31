// Marks Calculator
//     Shyam has got his marks in three subjects as A, B, and C (out of 100).Write a program to calculate his total marks and his average.
//     Note: You have to complete Sum and Average functions. No need to take any input.

//simple method
let firstNumber=50;
let secondNumber=50;
let thirdNumber=50
const sum1=firstNumber + secondNumber + thirdNumber;
console.log(sum1);
const avg=sum1/3;
console.log(avg);

// with the help of function
const Sum = (A, B, C) => 
{
 let total=A+B+C;
 return total;
};
console.log(Sum(80,80,80));

const Average = (A, B, C) => 
{
 let avg=(A+B+C)/3;
 return avg;
};
console.log(Average(80,80,80));
