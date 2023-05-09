let p = new Promise((resolve, reject) => {
    console.log("Promise pending");
    setTimeout(() => {
        console.log("hello");
        // resolve(true); //sending a message of promise resolved (successful)
        reject(new Error("some error occured")); //sending a message of promise rejected (unsuccessful)
    }, 2000);
})
console.log(p);

//resolve case hone par:
// p.then((value) => {
//     console.log(value);
// })

//reject case hone par:
p.catch((error) => {
    console.log("Some error occured");
})