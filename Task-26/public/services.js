const submitBtn = document.getElementById("submit-btn");
const inputText = document.querySelectorAll("input");
const nextBtn = document.getElementById("skip-btn");
const addBtn = document.getElementById("add-btn");
const servicesName = document.getElementById("services-name");
const servicesPrice = document.getElementById("services-price");
const servicesImage = document.getElementById("services-img");
const tableBody = document.querySelector(".t-body");
const finalAmount = document.getElementById("final-amount");
const sample = document.querySelector(".sample");

const db = [
    { link: "img/Leather cleaning.jpg", name: "Leather and Suede Cleaning", price: 999 },
    { link: "img/Ironing.jpg", name: "Ironing", price: 99 },
    { link: "img/wash-fold.jpg", name: "Wash and Fold", price: 299 },
    { link: "img/stain removal.jpg", name: "Stain Removal", price: 249 },
    { link: "img/wedding-dress.jpg", name: "Wedding Dress Cleaning", price: 499 },
    { link: "img/Dry cleaning.jpg", name: "Dry Cleaning", price: 199 },
];

/*++++++++++++++++++++++++++++++ for Book Now Section ++++++++++++++++++++++++++++++*/
submitBtn.addEventListener("click", () => {
    if (tableBody.innerHTML == '') {
        alert("Please add the item to the cart to book.");
    } else {
        alert("Thanks for using Our Services.")
        tableBody.innerHTML='';
        sample.style.display="flex";
        finalAmount.innerHTML = `₹0`;
        for(let i of inputText){
            i.value='';
        }
        submitBtn.style.backgroundColor = "#892be25c";
    }
});

/*++++++++++++++++++++++++++++++ Right part Services Display ++++++++++++++++++++++++++++++*/
let count = 1, i = 0, sum = 0;
addBtn.addEventListener("click", () => {
    submitBtn.style.backgroundColor = "#0dadfdbf";
    sample.style.display="none";
    let row = document.createElement("div");
    row.innerHTML = `
        <p>${count}</p>
        <p>${servicesName.innerText}</p>
        <p>${servicesPrice.innerText}</p>`
    let price = servicesPrice.innerText.slice(1);
    sum += Number(price);
    finalAmount.innerHTML = `₹${sum}`;
    row.classList.add("t-row");
    tableBody.appendChild(row);
    if(count>5){
        tableBody.classList.add("scroll");
    }
    count++;
    change();
});

nextBtn.addEventListener("click", () => {
    change();
});

function change() {
    servicesImage.setAttribute("src", db[i].link);
    servicesName.innerHTML = db[i].name;
    servicesPrice.innerHTML = `₹${db[i].price}`
    i++;
    if (i == db.length) {
        i = 0;
    };
};