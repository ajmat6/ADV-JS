let arr = [3,6];
//let [a,b] = arr; // instead of a = arr[0] and b = arr[1]

// console.log(a,b);


let arr2 = [1,2,3,5,6,7];
// let [a,b,c,d, ...rest] = arr2;
// console.log(a,b,c,d,rest);

let [a,,,, ...rest] = arr2;//particular value destructuring
console.log(a,rest);

let {p,q} = {p:1, q:2}; //destructuring of objects
console.log(p,q);

//Spread Suntax:

let obj = {...arr2};
console.log(obj);

function sum(a,b,c)
{
    return a+b+c;
}

console.log(sum(...arr2));

let obj2 = {
    name: "ajmat",
    company: "abc"
}
console.log({...obj2, name: "prem"});
