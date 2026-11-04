import { useState, useEffect } from "react";

import { getProducts } from "../services/productApi";

import ProductCard from "./ProductCard";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {

    try {
      const data = await getProducts();

      setProducts(data);

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="products-container">

      <h1 className="main-title">
        Products Explorer
      </h1>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
};

export default ProductList;