import { useEffect, useState } from "react";
import "./filter.css";

const Filter = ({ filters, setFilters, onApplyFilters, hideFilters }) => {
  const [categories, setCategories] = useState([]);

  useEffect(function getProducts() {
    async function fetchCategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCategories();
  }, []);

  const handleCategory = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  // const handlePriceRange = (e) => {
  //   setFilters({ ...filters, price: e.target.value });
  // };

  return (
    <div className="filter">
      <h1>Filter By:</h1>
      <select value={filters.category} onChange={handleCategory}>
        <option value="default">Select a Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {/* <select value={filters.price} onChange={handlePriceRange}>
        <option value="all-priced">Select Price Range</option>
        <option value="low-priced">Low-priced Items(less than $100)</option>
        <option value="mid-priced">Mid-priced Items($100 - $500)</option>
        <option value="high-priced">High-priced Items($500 - $1000)</option>
        <option value="premium-priced">
          Premium Items(greater than $1000)
        </option>
      </select> */}
      {/* {<button className="filter-button" onClick={onApplyFilters}>
        Apply
      </button>} */}
      {filters.category !== "default" || filters.price !== "all-priced" ? (
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={hideFilters}
        >
          Hide Filters
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filter;
