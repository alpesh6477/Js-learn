// // // // // // // // let mark = [ 12, 15, 16 ,14 ];

// // // // // // // // console.log(mark);
// // // // // // // // console.log(mark.length);

// // // // // // // // let heros = ["ironman" , "thor" , "spider man" , "shaktiman" , "thor" , "spider man" , "shaktiman" , "thor" , "spider man" , "shaktiman" , "thor" , "spider man" , "shaktiman"];
// // // // // // // // for (let i = 0; i < heros.length; i++) {
// // // // // // // //     console.log (heros[i]);
    
// // // // // // // // }

// // // // // // // let cities = ["delhi" , "heydrabad" ," pune", "gujrat","ahmdabad"];

// // // // // // // for( let city of cities){
// // // // // // //     console.log(city.toUpperCase());
// // // // // // // }


// // // // // // // example

// // // // // // let marks =[85 ,97,44,37,76,60];

// // // // // // let sum = 0;

// // // // // // for( let val of marks){
// // // // // //     sum += val;
// // // // // // }
// // // // // // let avg = sum / marks.length;

// // // // // // console.log(" your avrage marks = " + avg);


// // // // // // push method

// // // // // // let Name = ["alpesh", "raja","div","kush" ,"jigar", "hello"];

// // // // // // Name.push();
// // // // // // console.log(Name);

// // // // // // pop method

// // // // // let Name = ["alpesh", "raja","div","kush" ,"jigar", "hello"];

// // // // // Name.pop();
// // // // // console.log(Name);

// // // // // to string method

// // // // let Name = ["alpesh", "raja","div","kush" ,"jigar", "hello"];

// // // // console.log(Name);

// // // // console.log(Name.toString());
// // // // console.log(Name);


// // // // concat method

// // // let marvel =["airman" ," batman","thor"];
// // // let bolly =["akshay","krish","salman"];

// // // heros = marvel.concat(bolly);

// // // console.log(heros);

// // // //un shiftt method     

// // //  let marvel =["airman" ," batman","thor"];

// // //  marvel.unshift("bahubali");
// // //  console.log(marvel);


// // // // shiftt method     

// // // let marvel =["airman" ," batman","thor"];

// // // marvel.shift();
// // // console.log(marvel);


// // // slice method     

// // let marvel =["airman" ," batman","thor"];

// // marvel.slice();
// // console.log(marvel.slice());

// // splice method

// let mark = [10,20,30,40,50,60];

// mark.splice(1 , 2 , 100, 200);
// mark.splice(3,1,500);
// console.log(mark);


// example


let companies = ["Bloomberg" , "Microsoft","Uber","Google" , "IBM" ,"Netflix"];

companies.shift(0);


companies.splice(2 , 1 , "Ola");
companies.push("Amazone");
console.log(companies);