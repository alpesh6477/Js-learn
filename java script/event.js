// let btn1 = document.querySelector("#btn1");

// btn1.onclick = ( ) => {
//     console.log("on clicked");
//     let a = 25;
//     a++;
//     console.log(a);

// };


// // event object 

// btn1.onclick = (e) => {
// console.log(e);
// console.log(e.type);

// console.log(e.target);

// };

// let div = document.querySelector(".div");
// div.onmouseover = (etc) => {
//     console.log(etc);
//     console.log(etc.type);
// console.log(etc.target);
// console.log(etc.clientX , etc.clientY);
// }

//  // event listener

btn1.addEventListener("click" , () => {
    console.log("btn is clicked handler - 1 ");

});

btn1.addEventListener("click" , () => {
    console.log("btn  is  time   clicked handler -2  ");
    
}); 
  const handler3 = () => {
    console.log("btn is clicked handler-3 ");

};
btn1.addEventListener("click" , handler3);

btn1.addEventListener("click" , () => {
    console.log("btn  is  time   clicked handler - 4 ");
    
}); 
btn1.removeEventListener("click" ,handler3);