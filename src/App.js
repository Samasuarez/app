import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./pages/Home";
// import ProductsDetail from "./pages/ProductsDetail";
import ProductProvider from "./context/ProductContext";
const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products/:id" element={ /> */}
        </Routes>
      </BrowserRouter>
    </ProductProvider>

  
  );
};

export default App;
