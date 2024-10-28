let num=153;
console.log("Ex-number:",num);
// Sum of each digit
let sum=0;
while(num != 0){
    sum+=num%10;
    num=Math.floor(num/10);
}
console.log("Sum of its digits",sum);

// Check armstrong number
sum=0,num=153;
while(num != 0){
    let x=num%10;
    num=Math.floor(num/10);
    sum+=x**3;
}
num=153;
if(sum==num){
    console.log("Is it an armstrong number? Yes");
}else{
    console.log("Is it an armstrong number? no");
}

// check prime number
for(i=2;i<num/2;i++){
    if(num%i!=0){
        flag=1;
    }
}
if(flag==0){
    console.log("It is prime number");
}else{
    console.log("It is not a prime number");
}
// Calculate the factor of given number

console.log("Factor");
for(i=1;i<=num;i++){
    if(num%i==0){
        console.log(i);
    }
}


// let words=["apple","Banana","lichi","Beta"];
// let newWord=words;
// newWord[1]="dipesh";
// console.log(words);
// console.log(newWord);
