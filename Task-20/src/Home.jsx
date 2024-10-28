import React, { useState } from "react";
import Right from "./Right.jsx";
import shoes1 from "./assets/shoes-1.jpg";
import shoes2 from "./assets/shoes-2.jpg";
import shoes3 from "./assets/shoes-3.jpg";
import shoes4 from "./assets/shoes-4.jpg";
import shoes5 from "./assets/shoes-5.jpg";
import shoes6 from "./assets/shoes-6.jpg";
import shoes7 from "./assets/shoes-7.jpg";
import shoes8 from "./assets/shoes-8.jpg";
import shoes9 from "./assets/shoes-9.jpg";
import shoes10 from "./assets/shoes-10.jpg";

function Home() {
  const shoes = [
    { shoesName: "Nike Air Max", image: shoes1, price: 120 },
    { shoesName: "Adidas Superstar", image: shoes2, price: 100 },
    { shoesName: "Converse Chuck Taylor", image: shoes3, price: 60 },
    { shoesName: "Vans Old Skool", image: shoes4, price: 70 },
    { shoesName: "New Balance 574", image: shoes5, price: 80 },
    { shoesName: "Reebok Classic Leather", image: shoes6, price: 50 },
    { shoesName: "Puma Suede", image: shoes7, price: 90 },
    { shoesName: "Air Jordan 1", image: shoes8, price: 150 },
    { shoesName: "Nike Presto", image: shoes9, price: 100 },
    { shoesName: "Adidas Yeezy Boost", image: shoes10, price: 200 },
  ];

  const [cart, setCart] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0); 

  const addCart = (shoes) => {
    if (cart.find((el) => el.shoesName === shoes.shoesName)) {
      alert("This item is already added");
    } else {
      setCart([...cart, shoes]);

    }
    
  };

  return (
    <div className="w-full px-12 py-7 flex gap-8">
      <div className="w-3/5 grid grid-cols-2 gap-8 ">
        {shoes.map((el,idx) => {
          return (
            <div key={idx} className="rounded-xl h-96 flex flex-col border-2 overflow-hidden shadow-xl hover:scale-105 transition">
              <img src={el.image} alt={el.shoesName} className="h-3/5 w-full object-cover" />
              <div className="flex flex-col justify-evenly items-center h-2/5 bg-yellow-500 text-white text-xl font-bold">
                <h2 className="font-serif">{el.shoesName}</h2>
                <p>
                  Price:<span className="border-b-2">${el.price}</span>
                </p>
                <button className="bg-blue-600 px-4 py-2 rounded-lg shadow-lg font-mono active:scale-95"
                  onClick={() => {
                    addCart(el);
                    setTotalPrice(totalPrice + el.price);
                  }} > Add to Cart </button>
              </div>
            </div>
          );
        })}
      </div>
      <Right items={cart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
    </div>
  );
}

export default Home;
