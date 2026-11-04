import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="image-box">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="info-box">
        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-price">
          ${product.price}
        </p>
      </div>

    </div>
  );
};

export default ProductCard;