import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./Home";
// import ProductsDetail from "./componentes/ProductsDetail";

const GifApp = () => {
  return (
    <BrowserRouter>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Element={<Home />} />
          {/* <Route path="/products/:id" Element={<ProductsDetail />} /> */}
        </Routes>
      </Router>
    </BrowserRouter>
  );
};

export default GifApp;
