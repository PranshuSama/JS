// functions

function sayHello(){
    console.log('Hiie Pranshu from shrishti!')
}
sayHello()

// Parameters
function addNum(a,b,c){ // variables in func def is called parameters
    // console.log(a+b+c)
    return (a+b+c);
}
addNum(5,10,15); // yeh arguments hai jab hm func call krte time input dete hai

function multiplyNum(a,b){
    // console.log(a*b);
    return a * b;
}
multiplyNum(5,10);

// we should never cout / console.log the result
// we should always return the result so that we can further do with that result

// let a = multiplyNum(6,9);
// console.log("hey the result is: ",a);

// func to add any no. of number
function sumAll(...numbers){ // using rest operator
    let total = 0;
    for (const num of numbers){
        total = total + num
    }
    return total
}
let ans = sumAll(5,6,7);
console.log(ans)

// arguments krke js me object hoti hai jo hr input ko array like object me store krta hai

function addAllUsingArg(){
    let sum = 0;
    for(let i = 0; i< arguments.length; i = i + 1){
        sum = sum + arguments[i];
    }
    return sum;
}
let resultByArg = addAllUsingArg(1,2,3,4,5,6,7);
console.log(resultByArg)
