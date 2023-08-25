import { useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import Loading from "./Loading";
import "./productlist.css";

const ProductList = ({ products, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePagination = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > products.length / productsPerPage + 1) {
      return;
    }

    setCurrentPage(pageNumber);
  };

  return (
    <>
      {!loading ? (
        <>
          <ul className="product-list">
            {currentProduct.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </ul>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            onPaginate={handlePagination}
            currentPage={currentPage}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductList;
