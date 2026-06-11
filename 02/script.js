// console.log("yes it is connected") 

// variable

// datatype name = value -> strongly typed lang
// js -> loosly typed 

var age = 22;
var num1 = 10;
var num2 = 30;
console.log(age)
console.log(num1+num2);

age = "Pranshu"
console.log(age)

// no starting with number and speial char like 1 , # etc
// no space , no hypen
// first letter big means gen for classes

// var ka scope -> Global
if(true){
    var age = 23
    console.log(age)
}
console.log(age)

console.log(first) // if var first defined nhi hota so error "first is not defined at script.js:28:13"
var first = 69 // now "undefined aayega"
console.log(first) // ab print hoga 69
// infact console me jake bhi access kr skte ho ya value change kr skte ho

// let :- var and let same hi hai bs "let" vo locally hai

if(true){
    let goon = 88
    console.log(goon)
}
// but if idhar console likha toh vo undefined hojayega

// const :- same locall scope hai
// its value cannot be changed
// if it is defined before then its value remaines that only
// value re-assigned nhi ho skti.

const abcd = 89
abcd = "pranshu" // error show krega "Assignment to constant variable at script.js:46:6"
console.log(abcd)

// baki dono me agar define krke chor bhi skte the
// like let age;
// like var tuf;
// but const ko value assign krni hi padegi