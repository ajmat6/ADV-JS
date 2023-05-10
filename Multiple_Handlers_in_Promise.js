let p1 = new Promise((resolve, reject) => {
    console.log("wiating for the promise to get resolved");
    setTimeout(() => {
        resolve(true);    
    }, 2000);
})

p1.then((value) => {
    console.log("congratulations your promise get resolved");
});

p1.then((value) => {
    console.log("This is used to show you that there can be multiple handlers of a promise and it is different from chaining of promises (which is promise ke andar promise)");
});