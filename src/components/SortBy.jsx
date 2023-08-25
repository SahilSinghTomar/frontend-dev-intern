const SortBy = ({ sortBy, setSortBy, onApplySort, removeSort }) => {
  return (
    <div className="filter">
      <h1>Sort By:</h1>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="default">Select Option (Low to High)</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="stock">Stocks</option>
      </select>
      <button className="filter-button" onClick={onApplySort}>
        Apply
      </button>
      {sortBy !== "default" ? (
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={removeSort}
        >
          Remove Sorting
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SortBy;
