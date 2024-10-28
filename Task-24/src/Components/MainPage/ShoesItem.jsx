import React from "react";
import { useItem } from "../../Context/ItemContext";

function ShoesItem({ shoes}) {
  const {addPrice,addItem}=useItem();

  return (
    <div className="w-[60%] flex flex-col items-center gap-3">
      <h1 className="text-2xl font-serif w-full bg-sky-500 text-white font-semibold text-center rounded-lg py-1">
        Select Shoes
      </h1>
      <div className="w-full grid grid-cols-2 gap-4">
        {shoes.map((el, index) => (
          <div
            key={index}
            className="border-2 p-4 bg-sky-500 rounded-xl text-white flex flex-col gap-1 hover:scale-105 shadow-xl"
          >
            <img
              src={el.image}
              alt="Shoes Image"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="w-full h-32 flex flex-col items-center justify-evenly">
              <h3 className="text-2xl font-semibold font-serif">
                {el.shoesName}
              </h3>
              <p className="text-xl ">Price: ${el.price}</p>
              <button className="border py-2 px-4 rounded-md bg-white text-sky-500 font-semibold text-lg active:scale-95"
              onClick={()=>{
                addItem(el);
                addPrice(el.price)
              }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoesItem;
