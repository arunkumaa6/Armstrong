// armstrong number

let sum=0;
let num=prompt('enter a three digit positive integer');
console.log('value:',num);

let temp=num;
while (temp>0) {
    let remainder=temp%10;
    sum+=remainder*remainder*remainder;
    temp=parseInt(temp/10);
}

if(sum==num){
    console.log(`${num} is an armstrong number`);
}
else{
    console.log(`${num} is not an armstrong number`);
}