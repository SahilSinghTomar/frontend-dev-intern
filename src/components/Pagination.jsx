import "./pagination.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  onPaginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li
        className="page-item page-btn"
        onClick={() => onPaginate(currentPage - 1)}
      >{`<<`}</li>
      {pageNumbers.map((number) => (
        <li
          onClick={() => onPaginate(number)}
          key={number}
          className={`${
            currentPage === number ? "page-selected" : ""
          } page-item`}
        >
          {number}
        </li>
      ))}
      <li
        className="page-item page-btn"
        onClick={() => onPaginate(currentPage + 1)}
      >{`>>`}</li>
    </ul>
  );
};

export default Pagination;
