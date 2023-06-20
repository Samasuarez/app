import{useContext} from 'react'
import { ProductsContext } from "./componentes/context/productContext";
const Home = () => {
    const { products } = useContext(ProductsContext);
    console.log(products);
  return (
    <div>Home</div>
  )
}

export default Home