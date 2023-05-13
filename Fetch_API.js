let p = fetch("url"); // any api url
p.then((value1) => {
    console.log(value1.status); // to see the status code
    console.log(value1.ok); // to see boolean of the status code
    return value1.json(); //parsing the response as json
}).then((value2) => {
    console.log(value2); // in console json can be obtained
})