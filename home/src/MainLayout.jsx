import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "pdp/PdpContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const MainLayout = () => (
  <div className="mx-auto max-w-6xl">
    <BrowserRouter>
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path="/product/:id" element={<PDPContent />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

export default MainLayout;
