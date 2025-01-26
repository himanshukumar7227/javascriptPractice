const prompt=require("prompt-sync")();

let arr=[1,2,3,4,5,6,7];
let a=prompt("Enter Your number: ");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);