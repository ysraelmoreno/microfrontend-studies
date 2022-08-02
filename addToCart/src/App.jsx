import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import AddToCart from "./AddToCart";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: addToCart</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <AddToCart product={{ id: 1 }} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
