// var a = "temp";
var _123 = "Hello"
var $123 = "Hello"


// declaration  and initilazation

var d;   //  decleration
var temp_d = 12; // declaration  and initilazation

// var add value into window
// var is function scoped
// var can be redeclared and reassinged

var name = "user name";
let name1 = "user name";


// reassigment ,redeclaration
var temp = 12;
temp = "number";    // reassigment
// let temp="text" // redeclaration

// let temp_a="24"
// var temp_a="34";  you can"t redeacler let variable

const temp_b = "name"
// temp_b="username"


// scope (global, Block, functional)

var e = 23; // global scope
// console.log("Global Scope " + e);

{
    var e = 25; // block scope
    // console.log("block Scope " + e);
}

function abc() {
    var e = 30; // functional scope
    // console.log("functional scope " + e);
}

abc();
// console.log("Outside " + e);

let f = 23; // global scope
// console.log("Global Scope Let variable " + f);

{
    let f = 25; // block scope
    // console.log("block Scope Let variable " + f);
}

function abc() {
    let f = 30; // functional scope
    // console.log("functional scope Let variable " + f);
}

abc();
// console.log("Outside Let Variable " + f);

// temporal dead zone(tdz)
// console.log(h);
// var h = 24;


// console.log(g);
// console.log(j);
// let j = 12;


// hoisting imapact
// hoisting --> when your create a vaiable into js that break into two part first is decalere part that go to up and there initialization part that go down


var temp_d=12;

// var temp_d; --> underfined;--> that go to up 
// temp_d =12  -->that go to down (means stuck into line 66)
// if you use console.log before intializetion that give you undefined;

let temp_d_let =24;
// let variable not use before initialization that give you error;

// hoisting imapct on var ,let,const

/*

var -->hoist -->undefinded
let -->hoist -->error
const -->hoist --> error

*/


let nm = "name";
console.log(nm);


var b = "username";
console.log(b);


var x = 1;

{
    var x= 2;
}
console.log(x);



let a = 10;

{
    let a = 20;
    console.log("Inside:", a);
}

console.log("Outside:", a);


const person = {name: "demo"};

person = {} ; 

 