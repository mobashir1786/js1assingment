    //     Find if the conditions are obeyed or not?
    // You are given two number first as A and second as B and check 
    // if both conditions (A < 10 and A >B) are satisfied or not with the help of operators.
    // Note: You have to complete Is_Valid function. No need to take any input.

    // simple method
    let firstNumber=9;
    let secondNumber=4;
    const condition=firstNumber<10 && secondNumber<firstNumber? true :false;
    console.log(condition);

    // with the help of function
    const Is_Valid = (a,b) => {
        return a<10 && a>b ? true : false;
      };
    console.log(Is_Valid(2,5));