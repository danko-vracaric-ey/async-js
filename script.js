// function print1(){
//     const number1 = 1;
//     console.log(number1)
// }

// function print2(){
//     function getNumber2(){
//         return 2
//     }
//     const number2 = getNumber2()
//     console.log(number2)
// }

// function print3(){
//     const fs = require("fs");
//     fs.readFile("./number3.txt", "utf-8", function (err, number3){
//         console.log(number3)
//     })
// }
// utf-9; human, normal readable text

// function print4(){
//     const number4 = 4;
//     console.log(number4)
// }

// print1()
// print2()
// print3()
// print4()

// function print(number){
//     console.log(number)
// }

// const numbers = [1,2,3,4]

// numbers.forEach(print)

// function f(cb){
//     setTimeout(()=>cb(),0)
// }

// f(()=>console.log("This is a callback"))

// console.log("Hello world!")

// function f(cb){

//     setTimeout(cb,0)
// }

// f(()=>console.log("This is a callback"))

// console.log("Hello, world")

// function calculateSquare(number,callback){
//         setTimeout(function(){
//             if(typeof number !== "number"){
//                 throw new Error("Argument of type number is expected")
//             }
//         const result = number*number;
//         callback(result);
//         }, 1000)
// }

// try{
//  calculateSquare("bad argument", function(){

//         console.log(result, "ress")
//  })
// }catch(error){
//  console.log("Caught error" + String(error))
// }

// I will get uncaught error, instead of caught errror we specifed
//because setTimeout is a asynch function that will put our callback on the message que, while try catch block
//resides outside

// function calculateSquare(number,callback){
//         setTimeout(function(){
//             if(typeof number !== "number"){
//                 callback(new Error("Argument of type number is expected"))
//                 return;
//             }
//         const result = number*number;
//         callback(null, result);
//         }, 1000)
// }

// Let's modify the function in order to pass the error via arguments of the callback
// we will not trow the error inside but invoke the callback and pass the error as the first argument

// calculateSquare("bad argument", function(error, result){
//     if(error !== null){
//         console.log("Caught error:" + String(error))
//         return;
//     }
//     console.log(result)
// } )

// calculateSquare(2, function(error, result){
//     if(error !== null){
//         console.log("Caught error:"+ String(error))
//         return;
//     }
//     console.log(result)
// })

// CB examples in popular libraries

// setState does not always immediately updates the state of the componenent, in batches several for performance reasons
//so it is hard to say when the state will be actually updated
// so setState allows to specify a cb, who will be invoked when state changes

//in vanila js
//btn.addEventListener("click",()=>{})

//Callbacks lack of readability

// DOG API
//First I will get a first breed from the list and get a random picture of it
// the important thing is we are going get these http requests one after another
//second should start only after first finishes

// const req = new XMLHttpRequest()

// const method = "GET"

// const url = "https://dog.ceo/api/breeds/list/all"

// req.open(method, url)
// req.onreadystatechange = function(){
//     if(req.readyState === XMLHttpRequest.DONE){
//         console.log(req.responseText)
//         const res = JSON.parse(req.responseText)
//         const breeds = Object.keys(res.message)
//         console.log(breeds)
//         const firstBreedInTheList= breeds[0];
//         const req2 = new XMLHttpRequest()

// const method2 = "GET"

// const url2 = "https://dog.ceo/api/breeds/list/all"

// req.open(method2, url2)
// req.onreadystatechange = function(){
//     if(req2.readyState === XMLHttpRequest.DONE){
//         console.log(req.responseText)
//         const res2 = JSON.parse(req2.responseText)
//         const breeds = Object.keys(res.message)
//         console.log(breeds)
//         const firstBreedInTheList= breeds[0];

//     }
// }
// req2.send(null)

//     }
// }
// req2.send(null)

// we need to handle the response as well
// for this we are gonna use readyState() callback
//every time XMLHttpRequest state proprety changes, readyState() is invoked

//now we need to add a second http req after the first completes
// we need to place code inside onreadystatechange cb

// to make code more readable we can use promises

// Callback Hell in JS

// function calculateSquareNumm(number,callback){

//     setTimeout(function(){

//             if(typeof number !== "number"){
//                 callback(new Error("Argument of type number is expected"))
//                 return;
//             }
//             const result = number*number;
//             callback(null, result)

//     }, 1000)
// }

// print 3 results one after another
// ono sto ce se desiti je da saceka 1 sekundu i ispise sva 3
// calculateSquareNumm(1, function(error,result){
//         if(error!==null){
//             console.log("Caught" + String(error))
//             return;
//         }
//         console.log(result)
// })

// calculateSquareNumm(2,(error, data)=>{

//         if(error !== null){
//             console.log("Caught"+ String(error))
//             return;
//         }
//         console.log(data)
// })
// calculateSquareNumm(3,(error, data)=>{

//         if(error !== null){
//             console.log("Caught"+ String(error))
//             return;
//         }
//         console.log(data)
// })

// calcSquare je asinhrona funk a mi je pozivamo sinhrono
//js calculates each function should execute 1 second after it reaches it's line
// so we need to move the execution of the second funk into the first func

// calculateSquareNumm(1,function(error,result){
//     console.log(result)
//     calculateSquareNumm(2,function(error,result){
//         console.log(result)
//         calculateSquareNumm(3,function(erro,result){
//             console.log(result)
//         })
//     })
// })

// 26. Handling promise rejections

//when we want to handle erros separately from successful cases
//.then(undefined/null, onRejected)
// function calculateSquare(number){

//     const promise = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(typeof number !== "number"){
//                 return rej(new Error("Argument of type number is expected"))
//             }
//             const result = number * number;
//             res(result)
//         })
//     }, 5000)
//     return promise;
// }

// calculateSquare(1).then(res=>{
//     console.log(res)
//     // throw new Error("Something went wrong")
//     return calculateSquare(2);
// }).then(res=>{console.log(res)

// // throw new Error("Error")} instead of throwing an Error we can return rejected promise
// return new Promise((res,rej)=>{
//     rej(new Error("Some Error"))
// })})
// .then(undefined,rej=>{
//     console.log(rej)
// })
// throw new Error("Something went wrong") it won't be caught if generated here, what we need to do is exctract onRejected func from this then(second then method and put it in third then method)
//  rej=>{
// console.log(rej)
// });
// there is a drawback in this, if error happens in onResolved in first then, it will never be caught

// it is so common to handle erros in seperate block, that there is special method for this case, catch
// .t
// also instead of throwing an error we can return a rejected promise

// 27. Promise resolve and promise reject
//We are going to talk about two methods, that can help us convert ANY JS VALUE into a PROMISE

// Imagine we have some func that accepts promise as an argument

// function logToConsole(somePromise){
//     somePromise.then(res=>console.log(res))
// }

// somePromise = new Promise ((resolve,reject)=>{
//     resolve("Hello")
// })

// logToConsole(somePromise)
// logs Hello
// now imagine that we have a non promise value that we would like to print using our existing funct
// it's an type error, but what do we do to apply same func to non promise values as well;
// there is a method in js that is called Promise.resolve(),
// it returns a promise object that is resolved to the given value, if the value is already a promise it will return that promise

// const value = "string"

//1. convert our string into a promise

// const promisifiedValue = Promise.resolve(value)

// logToConsole(promisifiedValue)

// so Promise.resolve() method help us create a resolved promise out of non promise value, then we can .then that because it's a res() promise object returned by the method

// similar method creates a rejected promise with a given value as the reason

// const rejcted = Promise.reject(value)

// we can use any value but documentation reccommends using instance of Error as a reason

// 28. Executing Promises in Parallel: Promise.all Method

//Sometimes we need to execute several promises in parallel, e.g multiple http req and waiting for the all to complete
//e.g. I want to sell my merz to a used cars dealer, there 3 dealers
// each dealer has api that we can reach to gives us the price they can buy a car at
//1st dealer - $8000 , 3 seconds api response
//2nd dealer - $12000, 5 seconds
//3rd dealer - $10000, 8 seconds

// I can ask each separately and wait for answer and then  I can compare the prices
// or I can ask them all at the same time, this will short my waiting time

// function askFirstDealer(){
//     return new Promise ((resolve, rej)=>{

//         setTimeout(()=>resolve(8000), 3000)
//     })
// }

// function askSecondDealer(){
//     return new Promise((resolve,rej)=>{
//         setTimeout(()=> resolve(12000, 5000))
//     })
// }

// function askThirdDealer(){

//     return new Promise((resolve,rej)=>{
//         setTimeout(()=>{
//             resolve(10000, 8000)
//         })
//     })
// }

//there is a method available in js that can execute multiple promises in paralel

// Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(prices=>{
//     console.log(prices)
// })

// accepts 1 argument array of values(or any other iterable), array of promises and returns a single promise,
// this promise resolves when all of the promises in array resolves or when array has no promises
// we will get a return of array of prices after 8 seconds!

// if we pass normal values

// Promise.all([1, "string", true]).then(res=>console.log(res))

// 29. How Promise.all handles rejections
//Promise.all rejects when the first promise rejects, it rejects with the reason of the first promise

// lets imagine that second dealer doesn't want to buy a car

// function askFirstDealer(){
//     return new Promise ((resolve, rej)=>{

//         setTimeout(()=>resolve(8000), 3000)
//     })
// }

// function askSecondDealer(){
//     return new Promise((resolve,rej)=>{
//         setTimeout(()=> rej(new Error("car not suitable"), 5000))
//     })
// }

// function askThirdDealer(){

//     return new Promise((resolve,rej)=>{
//         setTimeout(()=>{
//             resolve(10000, 8000)
//         })
//     })
// }

// Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(res=>console.log(res)).catch(rej=>{
//     console.log(rej)
// })
// but we don't want to abandone all of the results because one of the promises rejected
// we should add catch block to initial promises

// Promise.all([askFirstDealer().catch(err=>err), askSecondDealer().catch(err=>err.message), askThirdDealer().catch(err=>err)]).then(res=>console.log(res)).catch(rej=>{
//     console.log(rej)
// })

// this is possible because catch returns a promise and unless we throw inside the catch block, this promise will be resolved

// Promise.all
// if we pass a promises that rejects immediatly, then Promise.all will reject immediately

// Promise.all([askFirstDealer().catch(err=>err), askSecondDealer().catch(err=>err.message), askThirdDealer().catch(err=>err)], Promise.reject("rejected for some reason")).then(res=>console.log(res)).catch(rej=>{
// console.log(rej)
// })

// 30. Promise.race method, which Promise is the fastest

// Let's imagine we are still going to school, one day we realize we forget our pen at home
// I call my friends to see who has an extra pen, so the first person who answers me is all I need
// I need to write others tnx I got the pen already

// var askJohn =()=>{
//     return new Promise ((res, rej)=>{
//         setTimeout(()=>{
//             res("Hi it's John, I've got a pen for you")
//         }, 1000)
//     })
// }
// var askEugene =()=>{
//     return new Promise ((res, reject)=>{
//         setTimeout(()=>{
//             reject("Hi it's Eugene, Sorry man I got only one")
//         }, 2500)
//     })
// }

// var askSusy = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Hi it's Susy, I got a pen for you")
//         }, 5000)
//     })
// }

// now we need to run these results in paralled but only get the fastest result

// Promise.race([askJohn(), askEugene(), askSusy()]).then(res=>console.log(res)).catch(err=>console.log(err))

// it returns the fastest promise to RESOLVE OR REJECTS, so if Eugone rejected fastest I would never get a pen

// Let's imagine there is a shop that sells pens, you can get and they respond instantly but you need to pay for it

// var askTheShop = ()=>{
//     return Promise.resolve("We always have pens, You can buy one for $1")
// }

// Promise.race([askJohn(), askEugene(), askSusy(), askTheShop()]).then(res=>console.log(res)).catch(err=>console.log(err))

// Async Await in JS

//35. Async Functions in JS

// It's a syntatic feature that allows asynchronous function to be structured in a way similar to synchronous functions

// async keywod

// can be placed before a functio def, this way we define an asynch function
// async func always return a promise
// if it doesn't, js will authomatically create a promise around that value, resolved promise with that value

// async function f(){
//     return "Hello world"
// }

// console.log(f())

//if async return somethin that's already a promise, js won't make any transformation on it

// async function d(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(true)
//         }, 1000)
//     })
// }

// var c = d()
// console.log(c)

// it is also possible to return rejected promises from asynch functions

// async function c(){
//     return Promise.reject(404)
// }

// 36. Await keyword in js

// function getSpecificNumber(){
//     return new Promise((res,rej)=>{
//              setTimeout(()=>{res(42)}, 2000 )
//     });
// }

// async function f(){
//     const specificNumber = await getSpecificNumber();
//     console.log(specificNumber);
// }

// var x = f()

// 37. Using Async Await with Fetch API

// It allows us to use HTTP requests and uses promises

//fetch function returns respons object, you can invoke various methods on this object
//in this case json, because I know that dogs api returns responses in json format
//fetch returns response object
// function getRandomDogImage(){
//     fetch("https://dog.ceo/api/breeds/image/random").then(res=>res.json()).then(data=>console.log(data))
// }

// getRandomDogImage()
// console.log("A")

// In this case I will use await keyword to await for the response
//basically we use await keyword on every place we used then
// async function getRandomDogImage(){
//     let response = await fetch("https://dog.ceo/api/breeds/image/random")
//     let value = await response.json()
//     console.log(value)
// }

// getRandomDogImage()
// it's more readable, than chaining promises
// await keyword doesn't work on top lvl

// 37. Top Level Await
// You can't use await inside regular function

// function getSpecificNumber() {
//   return new Promise((res, rej) => {
//     setTimeout(() => rej(new Error("1234")), 2000);
//   });
// }

// const specNumber = await getSpecificNumber();
// console.log(specNumber)
// (async function () {
//   try {
//     const specNumber = await getSpecificNumber();
//     console.log(specNumber);
//   } catch (err) {
//     console.log(err);
//   }
// })();

//  38. Handling promise rejections using async await

// If a promise gets rejected awaiting for this promise will throw an error
// we can catch errors using try catch syntax

// async function f() {
//   try {
//     const res = await fetch("https://www.fff.com/");
//   } catch (err) {
//     console.log("HEY" + err);
//   }
// }

// f();

//there is another way to handle rejected promises inside async function

//every async func returns promise that means we can invoke .then and .catch on it

// async function f() {
//   const res = await fetch("https://www.fff.com/");
// }

// f().catch((err) => console.log(err));

// 40. Sequential vs Parallel Execution

//How we can execute multiple promises 1 by 1 and in paralel using async await!

// function printNumber1() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Print1 is done!");
//       res(1);
//     }, 1000);
//   });
// }

// function printNumber2() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Print2 is done!");
//       res(2);
//     }, 1000);
//   });
// }

// now let's create a function that will invoke both one after another

// async function oneByOne() {
//   const number1 = await printNumber1();
//   const number2 = await printNumber2();
//   console.log(number1, number2);
// }

// oneByOne();

// we can invoke these functions in parallel and wait until both of them are completed

//   async function inParallel() {
//     const promise1 = printNumber1();
//     const promise2 = printNumber2();

//     const number1 = await promise1;
//     const number2 = await promise2;
//     console.log(number1, number2);
//   }

//   inParallel();

// use array destructuring and put two awaits in the same line
// and still works

// const [number1, number2] = [await promise1, await promise2]
// I can also put await promise1, await promise 2 in console.log()
//(you can use promise.all)
