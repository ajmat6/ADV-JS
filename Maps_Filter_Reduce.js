let arr = [1,3,4,6,7];

//Map:
// arr.map((value) => {
//     console.log(value);
// })

let a = arr.map((value) => {
    console.log(value);
    return value + 1; //will return a new array where each element of arr array is increased by 1
})
console.log(a);

//Filter:
let a2 = arr.filter((value) => {
    return value>3; //will return an array where each element is greater than 3 from the arr array
})
console.log(a2);

//Reduce:
// let a3 = arr.reduce((value1,value2) => {
//     return value1 + value2; //sum of first and second element form arr array and then iterating through the array
// })
// console.log(a3);

//same as above using function:
const met = (a, b) => {
    return a + b;
}

let a3 = arr.reduce(met);
console.log(a3);