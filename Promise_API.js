let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 1");  
        reject(new Error("error"));  
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 2");    
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");    
    }, 3000);
});

// Promise.all : It will run when all of the promises gets resolved
// let allPromiseResolve = Promise.all([p1,p2,p3]); //when all the promises gets resolved (Those all promises are stored in the form of the array)
// allPromiseResolve.then((value) => { //then do this
//     console.log(value);
// })

// Promise.allSettled : It will show status of all the promised wheather it is rejected or resolved (it will definitely run)
// let allPromisettled = Promise.allSettled([p1,p2,p3]);
// allPromisettled.then((value) => {
//     console.log(value);
// })

// Promise.race : It will return resolved or rejected value of first promise that gets either resolved or rejected
// let promiseRace = Promise.race([p1,p2,p3]); 
// promiseRace.then((value) => { 
//     console.log(value);
// })

// Promise.race : It will return resolved value of first promise that gets resolved
// let promiseAny = Promise.any([p1,p2,p3]); 
// promiseAny.then((value) => { 
//     console.log(value);
// })

// Promise.resolve : It will teturn resolved value
let promiseResolve = Promise.resolve(6); 
promiseResolve.then((value) => { 
    console.log(value);
})

// Promise.race : It will teturn rejected error
// let promiseReject = Promise.reject(new Error("New error")); 
// promiseReject.then((value) => { 
//     console.log(value);
// })