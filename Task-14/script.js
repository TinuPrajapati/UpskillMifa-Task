function performedDivision() {
    return new Promise((resolved, rejected) => {
        let num1 = prompt("Enter the first number");
        let num2 = prompt("Enter the second number");
        if (num2 != 0) {
            resolved(`Result =${Math.floor(num1 / num2)}`)
        } else {
            rejected(`Division cannot preformed because denominator is ${num2}`);
        }
    })
}

performedDivision()
.then((result)=>{
    console.log(result);
    return performedDivision();
})
.then((result)=>{
    console.log(result);
    return performedDivision();
})
.then((result)=>{
    console.log(result);
    return performedDivision();
})
.then((data)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})