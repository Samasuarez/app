import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import ItemProduct from "./componentes/ItemProduct";

// import ItemProduct from "./componentes/ItemProduct";

const GifApp = ({products}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category);
  };

  const filterProducts = (category) => {
    // Realizar la lógica de filtrado aquí utilizando la categoría seleccionada
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };
 
  return (
    <>
          <div>
      <h1>App</h1>
      <AddCategory onCategoryChange={handleCategoryChange} />
      <p>Selected category: {selectedCategory}</p>
      {/* Mostrar los productos filtrados */}
      <ItemProduct/>  
      
     
    </div>
    </>
  );
};

export default GifApp;
