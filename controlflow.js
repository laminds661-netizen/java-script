// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run

// if (12 < 13) {
//   console.log(true);
// }

// if (15 < 13) {
//   console.log(true);
// } // condition is false that why if statement not run

// if (!12) { // 12 --> true, !12 --> false
//   console.log("number");
// }

// if (!0) {
//   console.log("number");
// }

// controlflow.js

// if-else Statement
// if (12 < 13) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (15 < 13) {
//   console.log(true);
// } // condition is false that why if statement not run
// else {
//   console.log(false); // if if statement condition is false then run this code
// }

// if (!!2) {
//   console.log("number");
// } else {
//   console.log("Not A Number");
// }


let loggedin = true;
let admin = false;

if (loggedin && admin) {
  console.log("welcome admin");
} else if (loggedin) {
  console.log("welcome user");
} else {
  console.log("go to login page");
}


// example


let age=10;

if (age>18) {
    console.log("you are eligible")
}

else{
    console.log("you are not eligible");
    
}


// let a;
// let b;
// let operator;

// a = Number(prompt("Enter first number:"));
// b = Number(prompt("Enter second number:"));
// operator = prompt("Enter operator (+, -, *, /):");

// switch (operator) {
//     case "+":
//         console.log(a + b);
//         break;

//     case "-":
//         console.log(a - b);
//         break;

//     case "*":
//         console.log(a * b);
//         break;

//     case "/":
//         console.log(a / b);
//         break;

//     default:
//         console.log("Not a valid operator");
// }

function score(value) {
    if (value > 90) {
        return "Value is more than 90";
    } else if (value >= 80) {
        return "Value is between 80 and 90";
    } else if (value >= 70) {
        return "Value is between 70 and 79";
    } else if (value >= 60) {
        return "Value is between 60 and 69";
    } else {
        return "Value is less than 60";
    }
}



// console.log(score(100));


