// Loops

// for loop -> when u know the no. of times the loop is gonna run
for(let i = 1; i<= 10; i=i+1){
    console.log('Pranshu');
}

// while -> when u dont know the no. of iteration
let ip = 50;
let house = 50;
while(ip != house){
    ip = ip + 1;
    console.log('Step Taken:' + ip);
}

// Do while
// pehle code ko run kiya fir then condition check kiya

do {
    ip = ip + 1;
    console.log('Step Taken:' + ip);
} while(ip <= house);
// if ip = 50 so do while me step taken 51 aayega output
// but while loop me nhi as vo first condition check krega fir vo condition galat aayega...
