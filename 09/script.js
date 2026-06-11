// High order fun and Callback

/*
    the fun which takes another fun as argument is called "Higher Order Function"
    and callback is jis fun ko call kiya gya hai usko callback bolte hai.
*/

function add(a,b,cb){
    let result = a+b;
    cb(result);
}
// add(3,4,(val) => console.log(val));
// add(4,5,res => console.log(res));

function addV2(a,b,cb){
    let result = a+b;
    if (typeof cb === 'function') {
        cb(result);
    }

    return () => console.log(result);
}
let resultFunc = addV2(2,3,() => {}) // yeh khali fun ki jagah undefined bhi likh skta tha
resultFunc();