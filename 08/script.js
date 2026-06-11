// Arrow Func

// syntax
const sayHello = () => {
    console.log("Heyy")
};
sayHello();

// arguments
const addNum = (a,b) => {
    return (a + b)
};

// another way
const addNumV2 = (a,b) => (a+b); // one liner fun only if u have 1 statement in func.
/*

so if parenthesis use kroge toh return statement use krna padega
and if nhi laoge toh simple a+b krna padega.
if parenthesis lga diya aur return nhi likhe toh fir "undefined" error aayega.

*/

let result = addNumV2(2,3);
console.log(result);

// arguments is not defined for arrow fun.
// so if want to use arguments in arrow
// go with rest operator "..."

// Hoisting
// means accessing func before initialization

sayHeyy();

function sayHeyy(){
    console.log("Heyy There!")
}

/*
    but in arrow func u cant do hoisting.
    u have to first initialization then call.
*/

// This keyword

const obj = {
    value : 20,
    myFunc : function (){
        console.log(this)
    },
};
obj.myFunc();
// so "this" keyword in nrml func is refering to that object itself
// and in arrow vo this gloabl mtlb vo page ko refer krega (window object ko point krega).