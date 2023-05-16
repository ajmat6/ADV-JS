// LocalStorage holds the data even when the page reloads or the browser restarts

let key = prompt("Enter the key you want to set in localStorage")
let value = prompt("Enter the value you want to set in localStorage")

localStorage.setItem(key,value); // sets key value pairs

console.log(`The value at ${key} is ${localStorage.getItem(key)}`); // gets the value at the key
0
if(key == 'name' || key == 'arya')
{
    localStorage.removeItem(key); // remove that key value pair if the condition matches
}

localStorage.clear(); // clears the localStorage

console.log(localStorage.length); // gives length of the localStorage

console.log(localStorage.key(0)); // will give key at 0th index of the localStorage