import React from "react";

function PaymentOption(){
    return(
        <div className="w-[60%] flex flex-col items-center gap-2">
        <h2 className="text-2xl font-serif w-full bg-sky-500 text-white font-semibold text-center rounded-lg py-1">
          Payment
        </h2>
        <div className="w-full flex justify-center gap-10">
          <div className="flex gap-1">
            <input type="radio" id="cash" name="payment" />
            <label htmlFor="cash">Cash On Delivery</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" id="card" name="payment" checked/>
            <label htmlFor="card">Credit/Debit Card</label>
          </div>
        </div>
        <div className="border-2 w-[70%] p-4 rounded-lg bg-slate-300 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="card-no" className="block">
              Enter your Card Number:
            </label>
            <input
              type="text"
              id="card-no"
              placeholder="Card Number"
              maxLength={16}
              className="px-4 py-1 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="expiry" className="block">
              Enter Expiry Date:
            </label>
            <input
              type="text"
              id="expiry"
              placeholder="MM/YY"
              maxLength={5}
              className="px-4 py-1 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="cvv" className="block">
              Enter your CVV Number:
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="CVV"
              maxLength={3}
              className="px-4 py-1 rounded-md"
            />
          </div>
        </div>
        <button className="border px-4 py-2 text-xl bg-sky-500 text-white font-semibold rounded-lg shadow-xl hover:scale-110 active:scale-95">
          Confirm Payment
        </button>
      </div>
    )
};

export default PaymentOption;
