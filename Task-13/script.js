let arr1 = [12, 5, 78, 34, 10, 99];
console.log("Ex-array=",arr1);

// Find the maximum number using normal syntax function
function maximumNumber(a) {
    let b = a[1];
    for (let i = 0; i < a.length; i++) {
        if (b < a[i]) {
            b = a[i];
        }
    };
    return b;
}
let result=maximumNumber(arr1);
console.log("Maximum Number=",result);

// Calculate the sum of all elements in the array using the expression function and for-in loop

const sum=function (a){
    let sum=0;
    for(i in a){
        sum+=a[i];
    }
    return sum;
}
console.log("Sum of the array",sum(arr1));

// Count the number of odd numbers in the array using the arrow function
const oddNumber =(a)=>{
    let count=0;
    for(i in a){
        if(a[i]%2!=0){
            count++;
        }
    }
    return count;
}
console.log("Odd number in array=", oddNumber(arr1));