// function

// what --> function is a block of code that performs a specific task.

// why --> to avoid code repetition and to make code modular and reusable.

// how --> function keyword, name, parameters, body, return statement


// type of functions:

// function name(params) {}  --> function declaration
// function abc() {

// }

// let fnc = function () {}  --> function expression
// let fnc = function () {

// }

// let fnc = () => {}  --> arrow function --> fat arrow function

// let fnc1 = () => {

// }

// parameters vs arguments
// parameters are the names listed in the function definition 
// (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args --> 
// function call karti () ni andar lakheli(pass) kareli values)

// function cart(producat) {
//     // product -- params
//     console.log("product " , producat)
// }

// cart("Mobile"); // mobile - args
// cart("Laptop");
// cart("Tablet");

// // convert into arrow function
// // let cart = () => {}
// let cart2 = (producat) => {
//     // product -- params
//     console.log("product " , producat)
// }

// cart2("Mobile"); // mobile - args
// cart2("Laptop");
// cart2("Tablet");

// // Default, rest and spread parameters in function
// // default
// function abc(v1, v2){
//     console.log(v1, v2);
// }
// abc(20, 21);

// function cart3(price, product = "product"){
//     console.log(product, price)
// }
// cart3(20000);



// rest --> Jayre function ma multiple arguments pass karva to vadhare params banava 
// pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye 
// (rest ---> ... jo funtion na parameter ni anadar lakhvama aave chhe)

// function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
//     console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function cart4(...product) {
//     console.log(product);
// }
// cart4("p1", "p2", "p3", "p4", "p5");

// function abcd1(...numbers) {
//     console.log(numbers);
// }
// abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

// function abcd2(v1, v2, ...numbers) {
//     console.log(v1, v2, numbers);
// }



// // return or early return
// // return --> function mathi value bahar mokalva mate
// function getValue1(value) {
//     if (value < 25) return "Value is less than 25";
//     else if (value < 50) return "Value is less than 50";
//     else if (value < 75) return "Value is less than 75";
//     return "Value is 100 or more";
// }

// let result = getValue1(80);
// console.log(result);

// first Class Function
// function can be treated as variables
// function can be passed as arguments to other functions
// function can be returned from other functions



// first Class Function:
// function can be created as variable
// let fnc = function(){}
// let fnc = () => {}

// let buyNow1 = function (product, price) {
//     console.log(product, price)
// }

// buyNow1("S24 FE", 50500);


// function can be passed as arguments to other function
// let fnc = function(){}
// fnc(function(){})

// function abc1(v1, v2) {
//     console.log(v2);
//     return v1();
// };

// abc1(function() {
//     console.log("first class function");
// }, "Hello");

// function abc2(v1, v2) {
//     return v1();
//     console.log(v2);
// }

// abc2(function() {
//     console.log("first class function");
// }, "Hello");




// function can be returned from other function
// function abc() {
//     return function () {
//         console.log("function within function");
//     }
// }

// abc()();

// function abc2() {
//     return () => {
//         console.log("arrow function within function");
//     }
// }

// abc2();



// higher order function (HOF)
// function that takes another function as an argument or returns a
// function as a result (eva function je return kare ek function athava
// accept kare ek function params ma)

// function abcd(val){ val(); }
// --> abcd(function(){ console.log("hello") })
// function abcd(val){} --> higher order function

// function abcd(){ return function(){} } abcd()() --> higher order



// pure vs impure function
// pure function --> function je same input par same output aapse ane
// koi bahar na state ne modify na kare (pure function --> je function
// bahar na state ne modify na kare )

// let a = 20;

// function change_a() {
//     return "a not change (pure function) " + a;
// } // -- pure function

// console.log(change_a());

// impure function --> function je same input par different output
// aapse athava bahar na state ne modify kare (impure function --> je
// function bahar na state ne modify kare )

// function change_a1() {
//     a++;
//     return "a change (impure function) " + a;
// }

// console.log(change_a1());


// closure function
// function je potana parent function na variables ne access kari
// shake (return thava valo function use karshe parent function na koi
// variable) (function within function)

// function outer() {
//     let outer_var = "Outer Function Variable";

//     function inner() {
//         console.log(outer_var);
//     }

//     inner();
// }

// outer();



// lexical scope --> nested function can access variables declared in their outer scope
// function outer1() {
//     let outer_var = "Outer Function Variable";

//     function inner1() {
//         console.log(outer_var);
//         let inner_var = "Inner Function Variable";

//         function most_inner() {
//             console.log(outer_var);
//             console.log(inner_var);
//         }

//         most_inner();
//     }

//     inner1();
// }

// outer1();


// IIFE - Immediately Invoked Function Expression
// (function () {})(); // function je declare karta j call thai jaye

// (function () {
//     console.log("IIFE executed");
// })();


// Hoisting in function
// use case --> show project structure
// temp_fnc();

// function temp_fnc() {
//     console.log("hoisting in function");
// }




// // Example 2

// greet();

// function greet() {
//     console.log("Hello!");
// }

// // Example 3

// function add(a, b) {
//     return a + b;
// }

// // Example 4

// function welcome(name) {
//     console.log("Welcome " + name);
// }

// welcome("user");


// // Example 5

// function temp(a, b, c) {
//     console.log(a, b, c);
// }

// temp(1, 2);


// // Example 6

// function temp_user(name = "Guest") {
//     console.log("Hello " + name);
// }

// temp_user();

// // Example 7

// function number(...numbers) {
//     console.log(numbers);
// }

// number(1, 2, 3, 4, 5);


// Example 8
function calculateTotal(...scores) {
    let total = 0;

    scores.forEach(function (val) {
        total = total + val;
    });

    return total;
}

let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);


// Example 9

let age =5
  
function checkAge(age) {
    if (age < 18) {
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }

}

console.log(checkAge());

// Example 10

function f() {
    return;
}










































































