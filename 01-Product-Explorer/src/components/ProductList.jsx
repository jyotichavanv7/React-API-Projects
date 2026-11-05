import { useState, useEffect } from "react";
import { getProducts } from "../services/productApi";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar"; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Search input ki state

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

  // Title ke base par filter karne ka logic
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="products-container">
      <h1 className="main-title">Products Explorer</h1>

      {/* Badlav yahan hai: Aapke code ke mutabik props ka naam searchTerm rakha hai */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2 className="no-products" style={{ gridColumn: "1/-1", textAlign: "center" }}>
            No products found matching your search.
          </h2>
        )}
      </div>
    </div>
  );
};

export default ProductList;
