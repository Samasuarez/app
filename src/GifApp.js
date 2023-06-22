import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./pages/Home";
// import ProductsDetail from "./componentes/ProductsDetail";

const GifApp = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products/:id" Element={<ProductsDetail />} /> */}
        </Routes>
      </Router>
  </div>
  );
};

export default GifApp;
