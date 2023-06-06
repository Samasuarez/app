import React, { useEffect } from "react";

const GetProducts = ({ product }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        }));
        console.log(products);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  };

  return (
    <>
      <h1>{product}</h1>
    </>
  );
};

export default GetProducts;
