let promise = new Promise((resolve,reject) => {
    console.log("Hii");
    resolve(50);
})



console.log("Hello 1st");

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("Hello 3rd");

console.log(promise);
