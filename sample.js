//   function test(){
//       var x=10;
//       if(true){
//           var x = 20;
//           console.log(x);
//       }
//       console.log(x);
//   }

//   test();


//  immediately involve function

//   (
//       function(){
//           console.log("hello");
//       }
//   )()


//   template littrals

//   const hello=(fruit)=>{
//       console.log(`my favrouit ffuit is ${fruit}`);

//   }
//   hello("apple");\



//   let classname = ["aa","bb","cc","dd"];
//   for(i=0;i<classname.length;i++){
//       console.log(`my class is ${classname}`);

//      } 


// let a ;
// a =14;
// function fn(){
//     console.log("hello");
// }

// function fn2(){
//     let a = 10;
//     console.log(a);
//     console.log("hello2");
//     fn();
// }

// fn2();
// console.log(a);

// const number =[1,2,3,4];
// console.log(number);
// const doubles = number.map((num,index) => num * 2);
// console.log(doubles);


// const number = [1,2,3,4];
// const doubles = number.map((num,index)=>{
//     console.log(index,"index");
//     let double = num *2;
//     console.log(double,"double");
//     return double;
// })
// console.log(doubles);


// const data = [2,3,6,8,4,5,5,7];
// const filteredData = data.filter((num,index)=>{
//     console.log("index :",index,"num :",num);
//     return num % 2 == 0;
// })

// console.log(filteredData);


// const data = [2,3,4,5,6,6];
// const summerisedata = data.reduce((acc,num)=>{
//     acc = acc + num ;
//     console.log("num :",num,"acc :",acc);
//     return acc;
// },0);
// console.log(data);
// console.log(summerisedata);


// const data = ["aa","bb","cc","dd"];
// const uppercase = data.map((item)=>{
//     return item.toUpperCase();
// });
// console.log(data);
// console.log(uppercase);


// const data = ["zzzz","zz","eee","tttt"];
// const includingdata = data.filter((item)=>{
//     return item.includes("z");
// });
// console.log(includingdata);

// const number = [1,2,3,4];
// const numbers = [...number,5,6,7];
// console.log(numbers);


// const obj1 = { name : "aaaa" , age : 45 , city : "delhi"};
// console.log(obj1);

// function intervalfn(){
//     console.log("interval function called");
// }

// const intervalclear = setInterval(intervalfn,2000);

// setTimeout(() => {
//     console.log("timeout function called");
//     clearInterval(intervalclear);
// }, 6000);

// promises
// pending - still waiting 
// resolve - successfully got results
// rejected - something went wrong

// let myPromise = new Promise((resolve,reject)=>{
//     let success = true;

//     setTimeout(() => {
//         success=false;
        
//     }, 0);

//     setTimeout(()=>{
//         if(success){
//             resolve("data recieved");
//         } else{
//             reject("promise rejected:error");
//         }
//     },2000);
// });
// console.log("promise status",myPromise);

// myPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

async function getdata() {
    // let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    console.log(data);
    
}

getdata();