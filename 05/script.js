// logical operator

// AND -> &&
// OR -> || 
let age = 10;
let gender = "male"

if(age >= 18 || gender == "male"){
    console.log("You're an adult male");
}
else{
    console.log("You're an adult women");
}

// NOT -> ulta kr deta hai false ko true and true ko false
// !true krega console me toh false aayega output
// !false krega console me toh true aayega output

let number = 5;
// if(number % 2 != 0){
//     console.log("Odd");
// }
// else{
//     console.log("Even");
// }
if(!(number % 2 == 0)){
    console.log("Odd")
}