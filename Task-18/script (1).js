// 1. Question
let number=[2,4,6,8,10];
let squareNumber=number.map((arr)=>{
    return arr*arr;
});
// console.log(squareNumber);

// 2. Question
let studentScore=80;
// let grade=(studentScore>80)?console.log("A+"):((studentScore>70)?console.log("A"):console.log("B+"));

// 3. Question
let car={
    companyName:"BMW",
    model:"BMW-iX",
    year:2022,
};
function change(value){
    value.year=2023;
    // console.log(value);
};
change(car);
const {model,year}=car;
// console.log(`This model-${model} of car made in ${year} `);

// 4. Question
let num=[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let primeNumber=num.filter((arr)=>{
    let flag=0;
    for(let i=2;i<=(arr/2);i++){
        if(arr%i==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        return true;
    }else{
        return false;
    }
});
console.log(`Prime Number:1,2,${primeNumber}`);

// 4. Question
/*
    Map method:- Map method create a new array from calling the function for every array element. It does not change the original array and also does not execute when arrat is empty.
    
    Fliter Method:- Fliter method is use for fliter the array means retrieve the value according to their query and condition.It does not change the original array and return the new array. It execute when array is empty.

    Reduce Method:- The reduce() method executes a reducer function for array element which means that it use to convert the array in single value.It returns a single value: the function's accumulated result.It does not execute the function for empty array elements.It does not change the original array.
*/ 

// 5. Question
let url="https://jsonplaceholder.typicode.com/todos/1";
const useAPI =async ()=>{
    let response= await fetch(url);
    let result=await response.json();
    return result;
}

useAPI()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// 6. Question
const details={
    name:{
        firstName:"Rahul",
        middleName:"",
        lastName:"Kumar"
    },
    address:{
        officeAddress:"123, nakabandi road",
        homeAddress:"456 dangerous road, Udma colony"
    },
    contact:{
        telephoneNumber:756275217512,
        MobileNumber:3642185412,
    }
};
console.log(details.contact?.houseNumber);
console.log(details.name.firstName);