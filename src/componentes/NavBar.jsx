import React from "react";
// import GetCategory from "./helpers/getCategory";

const NavBar = () => {
  // const AddCategory = ({ onCategoryChange }) => {
  //   const [inputValue, setInputValue] = useState("");
  //   const [categories, setCategories] = useState([]);

  //   useEffect(() => {
  //     fetchCategories();
  //   }, []);

  //   const fetchCategories = () => {
  //     fetch("https://fakestoreapi.com/products/categories")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setCategories(json);
  //       })
  //       .catch((error) => {
  //         console.error("Error al obtener las categorías:", error);
  //       });
  //   };

  //   const handleInputChange = (event) => {
  //     setInputValue(event.target.value);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (inputValue.trim().length <= 1) return;

  //     onCategoryChange(inputValue.trim());
  //     setInputValue("");
  //   };

  // return (Name
  //   <form onSubmit={handleSubmit}>
  //     {/* <input
  //           type="text"
  //           placeholder="Buscar Gif"
  //           value={inputValue}
  //           onChange={handleInputChange}
  //         /> */}
  //     <select value={inputValue} onChange={handleInputChange}>
  //       {categories.map((category) => (
  //         <option key={category} value={category}>
  //           {category}
  //         </option>
  //       ))}
  //     </select>
  //     <button type="submit">Buscar</button>
  //   </form>
  // );
  // };
  // GetCategory()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          Navbar
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
