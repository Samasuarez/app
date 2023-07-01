import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
const Home = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filterProducts)
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid=cols-2 lg:grid-cols4 xl:grid-cols-5 gap-[30px]">
            {filterProducts.map((product) => {
              return (
                <div
                  className="w-full h-[300px] bg-pink-200 mb-4"
                  key={product.id}
                >
                  {product.title}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
