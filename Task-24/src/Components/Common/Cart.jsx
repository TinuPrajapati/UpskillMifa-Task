import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useItem } from "../../Context/ItemContext";
import Button from "./Button";

function Cart() {
  const [style, setStyle] = useState(false);
  const [style2, setStyle2] = useState(true);
  const { item, price } = useItem();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setStyle(true);
      setStyle2(false);
    } else {
      setStyle(false);
      setStyle2(true);
    }
  }, [location.pathname]);

  return (
    <div className="w-[40%] flex flex-col gap-4">
      <h1 className="text-2xl font-serif w-full bg-sky-500 text-white font-semibold text-center rounded-lg py-1">
        Cart
      </h1>
      <div className="w-full bg-slate-600 py-2 px-4 rounded-md flex flex-col gap-2">
        {item.map((item, index) => (
          <div key={index} className="w-full h-16 flex bg-white text-black rounded-lg shadow-lg  items-center px-2 gap-[1vw] py-1">
            {/* Shoes image */}
            <img src={item.image} className="w-[15%] h-full rounded-md" />

            {/* Information div */}
            <div className="w-[67%]">
              <p>{item.shoesName}</p>
              <p className="text-sm">${item.price}</p>
            </div>

            {/* Button div */}
            <Button el={item} />
          </div>
        ))}
      </div>
      <div className="text-2xl w-full flex flex-col items-center gap-2 bg-sky-500 text-white font-semibold text-center rounded-lg py-2">
        <p>
          <span className="font-serif">Total :</span> ${price}
        </p>
        {item.length > 0 && (
          <Link
            to="/payment"
            className={`py-2 px-4 ${style ? "block" : "hidden"} border-2 rounded-lg hover:bg-white hover:text-sky-500 shadow-xl active:scale-95`}
          >
            Proceed to Payment
          </Link>
        )}
        <Link
          to="/"
          className={`  ${style2 ? "block" : "hidden"} py-2 px-4 border-2 rounded-lg hover:bg-white hover:text-sky-500 shadow-xl active:scale-95`}
        >
          Go back to Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;