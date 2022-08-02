import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Footer from "home/Footer";
import Header from "home/Header";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PdpContent";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <BrowserRouter>
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
      </div>
    </BrowserRouter>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
