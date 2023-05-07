let arr = [1,23,4,5];

for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}

console.log();

//forEach loop
arr.forEach((e) => {
    console.log(e*e);
})

//Array.from:
let name = "Ajmat";
let arr2 = Array.from(name);
console.log(arr2);

// forof:
for(let i of arr)
{
    console.log(i);
}

//forin loop:
for(let j in arr)
{
    console.log(j);
}


