// async function ajmat()
// {
//     return 7;
// }

// ajmat().then((value) => {
//     console.log(value);
// })
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

    return [delhiw, jaipurw];

    // console.log(delhiw);
    // console.log(jaipurw);
}

let newfunction = () => {
    console.log("hello this is new function");
}

let a = ajmat();
let b = newfunction();
console.log(b);
// console.log(newfunction);
console.log(a);