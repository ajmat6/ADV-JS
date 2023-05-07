console.log(console);//to list methods of console object

console.error("This is an error"); //To show error, shows in red colour in console

console.assert(5>53); //assert the condition written -> shows an error message in console if assertion fails

console.clear(); //clears the console

let obj = {a:1, b:2, c:3, d:4};
console.table(obj); //shows key value pairs of object in tabualr format

console.warn("Warning"); //shows warning in console

console.info("info") //same as log but it goes in info section of console

console.time("forloop") //starting recording time for what is written in ""
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.timeEnd("forloop"); //calculates time from the start of what is written in ""