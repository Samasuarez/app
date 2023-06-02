import { useState } from "react";
import AddCategory from "./componentes/AddCategory";

const GifApp = () => {
  const [categories, setCategories] = useState(["Demon slayer"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => {
        return <li key={category}>{category}</li>;
      })}
    </>
  );
};

export default GifApp;
