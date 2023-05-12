// async function returns a promise

// async function ajmat()
// {
//     return 7;
// }

// ajmat().then((value) => {
//     console.log(value);
// })

//using await in async function
async function ajmat() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('27 degree celcius');
        }, 2000);
    })
    
    let Jaipurweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('24 degree celcius');
        }, 4000);
    })

    //these are when ajmat function is not async function

    // delhiweather.then((value) => {
    //     console.log(value);
    // })
    
    // Jaipurweather.then((value) => {
    //     console.log(value);
    // })

    console.log("Fetching Delhi weather");
    let delhiw = await delhiweather;
    console.log(delhiw);
    console.log("Fetching Jaipur weather");
    let jaipurw = await Jaipurweather;
    console.log(jaipurw);

    return [delhiw, jaipurw]; //returning the promise values of the async funciton
}

// parallely different functions are running with async await:
let newfunction = () => {
    console.log("hello this is new function");
}

let a = ajmat();
let b = newfunction(); //this will run and will not wait for ajmat function to get resolved
console.log(b);
console.log(a);