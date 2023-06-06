import React, { useState, useEffect } from "react";

const AddCategory = ({ onCategoryChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onCategoryChange(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={handleInputChange}
      />
      <select value={inputValue} onChange={handleInputChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default AddCategory;
