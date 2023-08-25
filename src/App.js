import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import SortBy from "./components/SortBy";
import ProductList from "./components/ProductList";
// import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "default",
    price: "all-priced",
  });
  const [sortBy, setSortBy] = useState("default");

  useEffect(
    function getProducts() {
      async function fetchProduct() {
        setLoading(true);
        try {
          let res;
          if (!query && filters.category === "default") {
            res = await fetch("https://dummyjson.com/products");
          } else if (query && filters.category === "default") {
            res = await fetch(
              `https://dummyjson.com/products/search?q=${query}`
            );
          } else {
            res = await fetch(
              `https://dummyjson.com/products/category/${filters.category}`
            );
          }

          const data = await res.json();

          if (data.products.length === 0) {
            throw new Error("Product Not Found!");
          }

          setProducts(data.products);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }

      fetchProduct();
    },
    [query, filters, sortBy]
  );

  const handleFilters = () => {
    setProducts((prevProd) => {
      return prevProd.filter((prod) => {
        if (filters.category === "default") {
          return true;
        } else {
          return prod.category === filters.category;
        }
      });
    });
  };

  const hideFilters = () => {
    setFilters({ category: "default", price: "all-priced" });
    setProducts(products);
  };

  const handleSorting = () => {
    if (sortBy === "default") {
      return;
    }

    const sortedProducts = [...products].sort((a, b) => a[sortBy] - b[sortBy]);
    setProducts(sortedProducts);
  };

  const removeSort = () => {
    setSortBy("default");
    setProducts(products);
  };

  return (
    <>
      <Container>
        <Navbar query={query} setQuery={setQuery} />
        <Filter
          filters={filters}
          setFilters={setFilters}
          onApplyFilters={handleFilters}
          hideFilters={hideFilters}
        />
        <SortBy
          sortBy={sortBy}
          setSortBy={setSortBy}
          onApplySort={handleSorting}
          removeSort={removeSort}
        />
        <ProductList products={products} loading={loading} />
      </Container>
      {/* <Footer /> */}
    </>
  );
}

const containerStyle = {
  maxWidth: "144rem",
  margin: "0 auto",
};

function Container({ children }) {
  return <div style={containerStyle}>{children}</div>;
}

export default App;
