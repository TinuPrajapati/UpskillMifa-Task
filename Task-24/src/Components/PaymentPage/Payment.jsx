import React from "react";
import PaymentOption from "./PaymentOption";
import Cart from "../Common/Cart";

// import Cart from "./Cart";

function Payment() {
  return (
    <main className="w-full flex gap-4 px-14 py-4">
      {/* Left Part */}
      <PaymentOption />

      {/* Right Part */}
      <Cart/>

    </main>
  );
}

export default Payment;
