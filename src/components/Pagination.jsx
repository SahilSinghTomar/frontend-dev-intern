import "./pagination.css";

const Pagination = ({ productsPerPage, totalProducts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li className="page-item">{`<<`}</li>
      {pageNumbers.map((page, idx) => (
        <li key={idx} className="page-item">
          {idx + 1}
        </li>
      ))}
      <li className="page-item">{`>>`}</li>
    </ul>
  );
};

export default Pagination;
