import React from "react";

import Login from "cart/Login";
import MiniCart from "cart/Minicart";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex p-5 shadow-md rounded-md mt-5 text-gray-500 text-sm font-bold">
      <div className="flex-grow">
        <Link to="/">My Store</Link>
      </div>
      <div className="flex flex-grow justify-end relative">
        <MiniCart />
        <Login />
      </div>
    </div>
  );
}
