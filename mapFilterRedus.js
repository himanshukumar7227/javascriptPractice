let arr=[45,23,21];
let a=arr.map((value,key,array)=>{
    console.log(value,key,array);
    return value+key;
})
console.log(a);

let arr2=[45,67,32];
let a2=arr2.filter((a)=>{
    return a>40;
})
console.log(a2);


//reduse

let arr3=[1,2,34,5]
let a4=arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(a4);