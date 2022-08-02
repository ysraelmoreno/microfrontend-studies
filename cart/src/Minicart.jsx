import React, { useEffect, useMemo, useState } from "react";
import { cart, destroyCart } from "./cart";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.items);

    return cart.subscribe((c) => {
      setItems(c?.items);
    });
  }, []);

  if (!items) return null;

  return (
    <>
      <span
        onClick={() => setShowCart(!showCart)}
        id="showcart"
        className="relative"
      >
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart" />

        {items.length > 0 && (
          <span
            className="absolute bg-red-500 rounded-xl py-1 px-2 text-white"
            style={{ bottom: "-10px", right: "-10px" }}
          >
            {items.length}
          </span>
        )}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 bg-white shadow"
            style={{ width: 300, top: "2rem", right: 0 }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{ gridTemplateColumns: "1fr 3fr 10fr 2fr" }}
            >
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="text-gray-300">{item.quantity}</div>
                  <img src={item.images[0]} alt={item.title} />
                  <div
                    style={{
                      maxWidth: "110px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="text-right">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="flex">
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
          </div>
        </>
      )}
    </>
  );
}
