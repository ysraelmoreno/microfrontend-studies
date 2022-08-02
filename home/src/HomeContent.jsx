import React, { useState, useEffect } from "react";
import { getProducts } from "./products";
import { Link } from "react-router-dom";
import { addToCart, useLoggedIn } from "cart/cart";
import AddToCart from "addToCart/AddToCart";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const listOfProducts = await getProducts();

      setProducts(listOfProducts);
    })();
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div className="p-5 shadow rounded" key={product.id}>
            <Link key={product.id} to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.name}
                style={{
                  maxHeight: "120px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Link>

            <div className="flex-col">
              <div className="flex justify-between">
                <div>
                  <div className="flex-grow text-sm mt-1 font-bold">
                    <span>{product.title}</span>
                  </div>
                  <div
                    className="flex-end
                  text-gray-400 text-xs"
                  >
                    {product.category}
                  </div>
                </div>

                <div>
                  <span className="text-gray-400 text-xs">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </span>
                </div>
              </div>
              <div className="text-sm mt-4">{product.description}</div>
              <AddToCart product={product} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
