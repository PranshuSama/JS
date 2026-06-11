const age = 18;
if(age >= 18){
    console.log('Yes you can vote');
}
else{
    console.log("No you can't vote");
}

// and if koi bhi yek condition match kr gyi toh baki nhi hoti hai...

// use of Ternay operator
// use when we have only 2 conditions

age >= 18 ? console.log("yes") : console.log("no")

let result = age >= 18 ? "yes" : "no"

console.log(result)

// switch statement

const option = 1;
switch(option){
    case 1: {
        console.log("Namaste!")
    }
    case 2: console.log('Hello')

    case 3 : {
        console.log('Bonjour')
    }
}
// so if koi bhi case match kr gya toh uske neeche ke saare statement print hojayefa
// if option 1 hai toh voh and uske neeche ke saare
// if option 3 hai so sirf bonjour hoga...
// so only want the matched output use "break"

const option2 = 6;
switch(option2){
    case 1: {
        console.log("Namaste!")
    }
    break;
    case 2: console.log('Hello');
    break;

    case 3 : {
        console.log('Bonjour')
    }
    break;
    default : console.log("Invalid Option");
}
// agar koi bhi match nhi krega toh default statement run hoga.
// can be use to make a simple calculator usinf switch.
