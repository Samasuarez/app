import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
const Home = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;


