import React, { useState } from "react";

const AddCategory = ({ onNewCategory}) => {
  const [inputValue, setInputValue] = useState([]);
  const onInputCHange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // console.log(inputValue)
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim())

    setInputValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputCHange}
      />
    </form>
  );
};

export default AddCategory;
