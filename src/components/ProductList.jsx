import { useEffect, useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import Loading from "./Loading";
import "./productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(function getProducts() {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) {
          throw new Error(
            "Something went Wrong! Check your internet connection and than try again"
          );
        }

        const data = await res.json();

        setProducts(data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePagination = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > products.length / productsPerPage) {
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
