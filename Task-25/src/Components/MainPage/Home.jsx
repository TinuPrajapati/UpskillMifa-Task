import React,{useEffect, useState} from "react";
import {
  Shoes1,
  Shoes2,
  Shoes3,
  Shoes4,
  Shoes5,
  Shoes6,
  Shoes7,
  Shoes8,
  Shoes9,
  Shoes10,
} from "../../assets";
import ShoesItem from "./ShoesItem";
import Cart from "../Common/Cart";



function Home() {
  const shoes = [
    { shoesName: "Nike Air Max", image: Shoes1, price: 120 },
    { shoesName: "Adidas Superstar", image: Shoes2, price: 100 },
    { shoesName: "Converse Chuck Taylor", image: Shoes3, price: 60 },
    { shoesName: "Vans Old Skool", image: Shoes4, price: 70 },
    { shoesName: "New Balance 574", image: Shoes5, price: 80 },
    { shoesName: "Reebok Classic Leather", image: Shoes6, price: 50 },
    { shoesName: "Puma Suede", image: Shoes7, price: 90 },
    { shoesName: "Air Jordan 1", image: Shoes8, price: 150 },
    { shoesName: "Nike Presto", image: Shoes9, price: 100 },
    { shoesName: "Adidas Yeezy Boost", image: Shoes10, price: 200 },
  ];

  return (
    <main className=" W-full flex py-4 px-14 gap-4">
      {/* Left Part */}
      <ShoesItem shoes={shoes}  />

      {/* Right Part */}
      <Cart/>
    </main>
  );
}

export default Home;
