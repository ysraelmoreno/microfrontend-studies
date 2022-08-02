import React from "react";

import { addToCart, useLoggedIn, destroyCart } from "cart/cart";

export default function AddToCart({ product }) {
  const loggedIn = useLoggedIn();

  return (
    <>
      {loggedIn && (
        <div className="flex justify-end mt-3 text-sm">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-sm p-2 rounded text-white"
            onClick={() => addToCart(product.id)}
            id={`addtocart_${product.id}`}
          >
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
}
