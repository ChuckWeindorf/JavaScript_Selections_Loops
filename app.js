console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let vint = 1; vint < 101; vint++) {
    if (vint % 2) {console.log(vint)}
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let vint2 = 1; vint2 < 101; vint2++) {
    vstrAnswer = "";
    if (vint2 % 3 == 0) {vstrAnswer = "FIZZ"};
    if (vint2 % 5 == 0) {vstrAnswer += "BUZZ"};
    if (vstrAnswer.length > 0) {console.log(vint2 + " " + vstrAnswer)};
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let vint3 = 1;
while (vint3 < 101) {
    if (vint3 % 2) {console.log(vint3)}
    vint3++;
    }
let vint3a = 1;
do  {
    if (vint3a % 2) {console.log(vint3a)}
      vint3a++
    } 
    while (vint3a < 101);

let vint3c = 1;
while (vint3c < 101) {
    vstrAnswer = "";
    if (vint3c % 3 == 0) {vstrAnswer = "FIZZ"};
    if (vint3c % 5 == 0) {vstrAnswer += "BUZZ"};
    if (vstrAnswer.length > 0) {console.log(vint3c + " " + vstrAnswer)};
    vint3c++;
    }    
let vint3d = 1;
do  {
    vstrAnswer = "";
    if (vint3d % 3 == 0) {vstrAnswer = "FIZZ"};
    if (vint3d % 5 == 0) {vstrAnswer += "BUZZ"};
    if (vstrAnswer.length > 0) {console.log(vint3d + " " + vstrAnswer)};
    vint3d++;
    }        
    while (vint3d < 101);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500
console.log(value, n);
for (let vint5 = 0; vint5 <= n; vint5++)
{
    if (vint5 == value) {
        console.log(`Found value ${vint5}`);
        break;
    }
    else if (vint5 == n) {console.log("Did not find value");}
}
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); 
// creates a random number between 100 and 1000
console.log(fizzDivisor, buzzDivisor, start, end);

let vint6 = start;
while (vint6 <= end) {
    vstrAnswer = "";
    if (vint6 % fizzDivisor == 0) {vstrAnswer = "FIZZ"};
    if (vint6 % buzzDivisor == 0) {vstrAnswer += "BUZZ"};
    if (vstrAnswer.length > 0) {console.log(vint6 + " " + vstrAnswer)};
    vint6++
}