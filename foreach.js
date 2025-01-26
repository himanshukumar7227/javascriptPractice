let num=[1,2,3,5];
num.forEach(element => {
    console.log(element);
});
for(i of num){
    console.log(i*i);

}
for(i in num){
    console.log(num[i]*2);
}