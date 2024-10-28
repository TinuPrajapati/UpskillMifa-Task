const inputText = document.querySelector("input");
const btn = document.querySelector("button");
const boxes = document.querySelector(".boxes");

let db = [
    { name: "John", class: "10th", marks: 80, address: "123 Main St" },
    { name: "Jane", class: "11th", marks: 90, address: "456 Elm St" },
    { name: "Bob", class: "12th", marks: 70, address: "789 Oak St" },
    { name: "Alice", class: "9th", marks: 85, address: "321 Park Ave" },
    { name: "Mike", class: "10th", marks: 75, address: "901 Maple St" },
    { name: "Emily", class: "11th", marks: 95, address: "234 Cedar St" },
    { name: "David", class: "12th", marks: 80, address: "567 Pine St" },
    { name: "Sarah", class: "9th", marks: 90, address: "678 Spruce St" },
    { name: "Kevin", class: "10th", marks: 85, address: "345 Fir St" },
    { name: "Laura", class: "11th", marks: 80, address: "1234 Oak St" },
    { name: "Laura", class: "11th", marks: 80, address: "1234 Oak St", },
    { name: "Aman", class: "10th", marks: 80, address: "123 Main St" },
    { name: "Yash", class: "11th", marks: 90, address: "456 Elm St", },
    { name: "Nitin", class: "12th", marks: 70, address: "789 Oak St" },
    { name: "Nishant", class: "12th", marks: 70, address: "789 Oak St" },
    { name: "Amit", class: "9th", marks: 85, address: "321 Park Ave" },
    { name: "Jahagir", class: "10th", marks: 75, address: "901 Maple St" },
    { name: "Salman", class: "11th", marks: 95, address: "234 Cedar St" },
    { name: "Jatin", class: "12th", marks: 80, address: "567 Pine St" },
    { name: "Tinu", class: "10th", marks: 85, address: "345 Fir St" },
];

btn.addEventListener("click", (e) => {
    let input = inputText.value.toLowerCase();
    console.log(input);
    let filtered = db.filter((item) => item.name.toLowerCase().includes(input));
    boxes.innerHTML = "";
    print(filtered);
})

const print = (value) => {
    for (item of value) {
        let box = document.createElement("div");
        box.innerHTML = `
        <p>Name : ${item.name}</p>
        <p>Mark : ${item.marks}</p>
        <p>Class : ${item.class}</p>
        <p>Address : ${item.address}</p>`;
        box.classList.add("box");
        boxes.appendChild(box);
    };
};
print(db);