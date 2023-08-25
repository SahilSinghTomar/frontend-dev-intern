import "./product.css";

const Product = ({ product }) => {
  return (
    <li className="product-item">
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-image"
      />
      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <div className="product-prices">
          <p className="product-price">{product.price}</p>
          <p className="product-discountedprice">
            {`$${Math.round(
              (+product.price * (100 - +product.discountPercentage)) / 100
            )}`}{" "}
            <span>{`(${product.discountPercentage}% off)`}</span>
          </p>
        </div>
        <p className="product-title">{product.title}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-rating">{product.rating}</p>
        <p className="product-stocks">
          <span>{product.stock}</span> stocks left
        </p>
      </div>
    </li>
  );
};

export default Product;
