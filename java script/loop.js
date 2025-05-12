for (let i = 1; i < 100; i++) {
    console.log("hello google");

}
// sum of 1 to 5 number
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;

}
console.log("sum =", sum);


for (let i = 0; i <= 5; i++) {
    console.log("i = ", i);
}


// while loops

// let i = 1;
// while (i <= 10) {
//     console.log("hello google");
//     i++;

// 

// do  while loop

let k = 1;
do {
    console.log("hollo", k);
    k++;

} while (k <= 10);

// for of loop


// let str = "googlehhvdbxdbidgxjhdxvg";

// let size = 0;
// for (let i of str) {
//     console.log
// ("i= ", i);    
// size++;
// }
// console.log("string size = " , size);

// print all even number for 0 to 100



for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {  // even number
        console.log(i);
    }


}
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {  // odd number
        console.log(i);
    }


}



// quation 2 practice

let gameNum = 20;

let userNum = prompt("Guess the game number: ");
while (userNum != gameNum) {
   userNum = prompt("You entered the wrong number, enter the number again:");
}
console.log("Congratulations! You entered the right number.");
