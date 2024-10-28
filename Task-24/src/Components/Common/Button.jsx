import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Button({ el }) {
  const context = useOutletContext();

  const add = () => {
    context.item.map((value)=>{
      if(value === el){
        value.count = value.count + 1;
      }
    })
    context.setPrice((prev) => prev + el.price);
  };

  const remove = () => {
    if (el.count > 1) {
      context.item.map((value)=>{
        if(value === el){
          value.count = value.count - 1;
        }
      })
    } else {
      context.item.map((value)=>{
        if(value === el){
          value.count =  1;
        }
      })
      context.setItem((prev) => prev.filter((item) => item !== el));
    }
    context.setPrice((prev) => prev - el.price);
  };

  return (
    <div className="flex w-[18%] h-full justify-between items-center">
      <button
        className="size-5 bg-yellow-500 text-white flex justify-center items-center rounded-md py-1 active:scale-95"
        onClick={remove}
      >
        -
      </button>
      <p>{el.count}</p>
      <button
        className="size-5 bg-yellow-500 text-white flex justify-center items-center rounded-md active:scale-95"
        onClick={add}
      >
        +
      </button>
    </div>
  );
}