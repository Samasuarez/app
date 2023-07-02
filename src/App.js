import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./pages/Home";
// import ProductsDetail from "./pages/ProductsDetail";
import ProductProvider from "./context/ProductContext";
import Footer from "./componentes/Footer";
import ProductsDetail from "./pages/ProductsDetail";
const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetail/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ProductProvider>

  
  );
};

export default App;
