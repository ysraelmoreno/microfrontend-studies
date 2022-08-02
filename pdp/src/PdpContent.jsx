import React, { useState, useEffect } from "react";

import { getProductById } from "home/products";
import { useParams } from "react-router-dom";
import AddToCart from "addToCart/AddToCart";
export default function PDPContent() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  const id = 1;

  useEffect(() => {
    (async () => {
      if (id) {
        const singleProduct = await getProductById(params.id);

        console.log(singleProduct);

        setProduct(singleProduct);
        return;
      }

      setProduct(null);
    })();
  }, []);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.images[0]} alt={product.name} />
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold">{product.title}</h1>
        <div className="flex">
          <h5
            className="text-sm text-gray-300"
            style={{ textTransform: "capitalize" }}
          >
            {product.category} -
          </h5>
          <p className="ml-2 text-sm text-gray-300">{product.brand}</p>
        </div>

        <p className="mt-5 text-sm">{product.description}</p>

        <h1 className="mt-5 text-xl" style={{ fontWeight: "bold" }}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </h1>

        <AddToCart product={product} />
      </div>
    </div>
  );
}
