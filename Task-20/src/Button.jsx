import { useState } from "react";

export default function Button({ send, onUpdateList ,setPrice}) {
  let [count, setCount] = useState(1);

  const add = () => {
    setCount(count + 1);
    setPrice(prev=>{
      return prev + send.price
    })
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
      onUpdateList(send.shoesName);
    }
    setPrice(prev=>{
      return prev - send.price
    })
  };

  return (
    <div className="flex w-[18%] h-full justify-between items-center">
      <button className="size-5 bg-yellow-500 text-white flex justify-center items-center rounded-md py-1 active:scale-95" onClick={remove} >  - </button>
      <p>{count}</p>
      <button className="size-5 bg-yellow-500 text-white flex justify-center items-center rounded-md active:scale-95" onClick={add} >  + </button>
    </div>
  );
}