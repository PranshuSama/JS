// arrays

const students = ['Pranshu', 'Shrishti', 'Sama', 'Gupta'];
let len = students.length;
// console.log(len);
// yeh students const hai nah jo tum isko re assign nhi kr skte
// uske under ke values ko kr skte ho change.

// heterogenous types of value kr skte ho array ke ander
// objects bhi daal skte ho array ke ander.

const marks = [10,20,30,40,50];
marks.forEach((val) => console.log(val)); // aur .foreach kuch return nhi jrta hai.
marks.map((val) => console.log(val)); // .map yek new array return krta hai

// slice, splice, find, findIndex yeh sab func hai...