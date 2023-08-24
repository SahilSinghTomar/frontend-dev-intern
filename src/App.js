import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import SortBy from "./components/SortBy";
import Product from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Filter />
        <SortBy />
        <Product />
      </Container>
      <Footer />
    </>
  );
}

const containerStyle = {
  maxWidth: "135rem",
  margin: "0 auto",
};

function Container({ children }) {
  return <div style={containerStyle}>{children}</div>;
}

export default App;
