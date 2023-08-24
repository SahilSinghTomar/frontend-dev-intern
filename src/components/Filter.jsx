import "./filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <h1>Filter By:</h1>
      <select>
        <option>Select a Category</option>
        <option>smartphones</option>
        <option>laptops</option>
        <option>fragrances</option>
        <option>skincare</option>
        <option>groceries</option>
      </select>
      <select>
        <option>Select Price Range</option>
        <option>Low-priced Items(less than $100)</option>
        <option>Mid-priced Items($100 - $500)</option>
        <option>High-priced Items($500 - $1000)</option>
        <option>Premium Items(greater than $1000)</option>
      </select>
      <button className="filter-button">Apply</button>
    </div>
  );
};

export default Filter;
