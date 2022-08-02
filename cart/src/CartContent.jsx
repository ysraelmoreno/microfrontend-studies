import React, { useState, useEffect, useMemo } from "react";
import { cart, destroyCart, useLoggedIn } from "cart/cart";
import CartButtons from "addToCart/CartButtons";

export default function CartContent() {
  const [cartItems, setCartItems] = useState([]);
  const [text, setText] = useState("");
  const isLogged = useLoggedIn();

  const total = useMemo(
    () =>
      cartItems?.reduce(
        (prevValue, acc) => prevValue + acc.price * acc.quantity,
        0
      ) ?? 0
  );

  useEffect(() => {
    setCartItems(cart.value?.items);

    return cart.subscribe((c) => {
      setCartItems(c?.items);
    });
  }, [text]);

  return (
    <>
      <input type="text" onChange={(ev) => setText(ev.target.value)} />
      <div className="my-10 grid grid-cols-4 gap-5">
        {cartItems?.length > 0 &&
          cartItems.map((item) => (
            <React.Fragment key={item.id}>
              <div className="text-gray-300">{item.quantity}</div>
              <img
                src={item.images[0]}
                alt={item.title}
                style={{ maxHeight: "50px" }}
              />
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
        <div className="text-right">
          {total > 0 &&
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <CartButtons />
      </div>
    </>
  );
}
