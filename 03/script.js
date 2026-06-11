console.log('test hi')

// data type

// number
let num1 = 3.14 
// auto vo number consider ho jata hai
// no double , float, long int etc

let num2 = 10
console.log(num1+num2)

// string
// alphanumeri ko bolte hai
let firstName = '123#4Pranshu'
console.log(firstName)
const lastName = "Sama"
console.log(firstName + ' ' + lastName);

// boolean
let lastDay = false
console.log(lastDay);

let lastLoginDate = null;
console.log(lastLoginDate)
// yeh lastLoginDate ka type any hoga as uski value
// hmne abhi tk assign hi nhi ki hai isliye.
// aur koi bhi variable bnane me space to use hota hi hai
// so null bnane me bhi use hoga... BUT

// undefined

let lastNameisPresent = undefined;
console.log(lastNameisPresent)
// space use nhi hoga...

// objects
const person = {
    firstName : 'Pranshu',
    lastName : "Sama",
    age : 21,
    lastLoginDate : false,
    lastNameisPresent : true,
}
console.log(person) // object bn gya yeh and console me dekhna toh aayega object
console.log(person.lastNameisPresent)
// objects me key value pair hoti hai

// true -> 1
// false -> 0

// so if operator use kiya toh simple add/sub hojayega

let numbool = false;
console.log(numbool * 20) // 1 * 20 = 20

// '1' + '1' ko vo concat kr dega
console.log('1' + 1);
// and if single quote hta bhi do tbbhi hojayega.
// bs vo output string hoga

// what if
console.log('1' * 11) // 11 as a number bn gya output me

// so i want to convert the string into number just multiple it with 1.

console.log('123' * 1) // ab number bn gya.

// but
console.log('a' * 1) // NaN means not a number.

// Type of
console.log(typeof('123' * 1)); // number aayega
console.log(typeof('123')) // string
console.log(typeof(person))