console.log(document.cookie) // will show all cookies
// document.cookie = "name=ajmat"; // adding a cookie
// console.log(document.cookie);
// document.cookie = "name2=kathat"; // adding a cookie
// console.log(document.cookie); // will show both added cookies (it will not overwrite)
// document.cookie = "name=aslam"; // adding a cookie
// console.log(document.cookie); // will update name as aslam(it will not overwrite)

let key = prompt("Enter your cookie key");
let value = prompt("Enter your cookie value");

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`; // encodes key value entered and decodeURiComponent can be used to decode the existing cookies
console.log(document.cookie); 