let p1 = new Promise((resolve, reject) => {
    console.log("Promise pending");
    setTimeout(() => {
        console.log("hello");
        resolve(true); 
        // reject(new Error("some error occured")); 
    }, 2000);
})
console.log(p1);

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        resolve("Promise 2");
        
    })
    return p2; //p1 on resolving returning p2 promise
}).then((value) => { //chaining of promises
    console.log(value);
    return 3; //returning constant value but js will convert it into a promise with resolved value 3
}).then((value) => {
    console.log("Resolved with " + value + " value")
})