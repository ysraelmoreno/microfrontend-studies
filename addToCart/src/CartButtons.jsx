import React from "react";
import { useLoggedIn, destroyCart } from "cart/cart";

export default function CartButtons() {
  const isLogged = useLoggedIn();
  return (
    isLogged && (
      <div className="flex justify-end">
        <div className="flex-grow p-2">
          <button
            className="bg-white border w-full text-green-800 py-2 px-5 rounded-md border-green-800"
            onClick={destroyCart}
            id="clearcart"
          >
            Clear
          </button>
        </div>
        <div className="flex-grow p-2">
          <button
            className="bg-green-800 border w-full text-white py-2 px-5 rounded-md border-green-800"
            onClick={console.log("checkout")}
            id="checkoutcart"
          >
            Checkout
          </button>
        </div>
      </div>
    )
  );
}
