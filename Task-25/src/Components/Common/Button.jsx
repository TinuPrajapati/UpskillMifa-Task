import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addPrice,removePrice } from "../../Features/priceSlice";
import { removeItem ,increaseCount,decreaseCount} from "../../Features/itemSlice";

export default function Button({ el }) {
  const items = useSelector(state => state.itemReducer.items);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increaseCount(el.id))
    dispatch(addPrice(el.price))
  };

  const remove = () => {
    if (el.count > 1) {
      dispatch(decreaseCount(el.id))
    } else {
      dispatch(removeItem(el.id))
    }
    dispatch(removePrice(el.price))
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