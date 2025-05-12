// // // // // // // function myfunction() {
// // // // // // //     console.log("hello world");
// // // // // // //     console.log("js learnig");

// // // // // // // }
// // // // // // // myfunction();
// // // // // // // myfunction();

// // // // // // function myfunction(msg) {

// // // // // //     console.log(msg);  // perameter 
    
// // // // // // }

// // // // // // myfunction("hello gujrati boys");

// // // // // function sum(x , y) {
// // // // //     console.log(x + y );

// // // // // }


// // // // // arrow function

// // // // function sum (a , b) {
// // // //     return a + b;

    
// // // // }
// // // // const arrowSum = (a ,b)=>{
// // // //     console.log(a+b);

// // // // };


// // // // multiplication arrow function

// // // function mult(x,y) {
// // //     return x*y;

    
// // // }

// // // const arrowmult = ( x , y)=>{
// // // console.log( x*y);
// // // };


// // //  for each loop in array function

// // // map method

// // let nums = [12 , 20,30];

// // let newArr = nums.map((val) => {
// //     return val * 2 ;
// // });

// // console.log(newArr);


// // filter method

// let arr = [1, 2,3,4,5,6,7,8,9];

//  let newArr = arr.filter((val) => {
//     return val % 2 === 0 ;
// });
// console.log(newArr);


//  reduce method

let arr = [1 ,2,3,4,5,6,7,8,9];

 const newArray = arr.reduce((res , curr) =>{
    return res + curr ;

});
console.log(newArray);

