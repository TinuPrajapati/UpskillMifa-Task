let red = document.getElementById("Red");
let green = document.getElementById("Green");
let blue = document.getElementById("Blue");
let yellow = document.getElementById("Yellow");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

red.addEventListener("click",()=>{
    red.style.backgroundColor="red";
    red.style.borderColor="black";
    red.style.color="white";
});
green.addEventListener("click",()=>{
    green.style.backgroundColor="green";
    green.style.borderColor="black";
    green.style.color="white";
});
blue.addEventListener("click",()=>{
    blue.style.backgroundColor="blue";
    blue.style.borderColor="black";
    blue.style.color="white";
});
yellow.addEventListener("click",()=>{
    yellow.style.backgroundColor="yellow";
    yellow.style.borderColor="black";
    yellow.style.color="white";
});

btn.addEventListener("click",()=>{
    let value = input.value;
    let firstLetter=value[0].toUpperCase();
    let restLetter=value.slice(1);
    console.log(firstLetter);
    console.log(restLetter);
    h1.innerHTML=`Hello, ${firstLetter+restLetter}`;
    input.value="";
})

