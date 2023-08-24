const SortBy = () => {
  return (
    <div className="filter">
      <h1>Sort By:</h1>
      <select>
        <option>Select Option (Low to High)</option>
        <option>Price</option>
        <option>Rating</option>
        <option>Stocks</option>
      </select>
      <button className="filter-button">Apply</button>
    </div>
  );
};

export default SortBy;
