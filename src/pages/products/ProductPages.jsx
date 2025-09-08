// Products.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductPages = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend 
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Dummy handlers for buttons
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product) => {
    console.log("Buy now:", product);
    alert(`Redirect to buy ${product.name}`);
  };

  return (
    <div className="container mx-auto min-h-screen bg-base-200 p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-md rounded-xl overflow-hidden">
            <figure className="h-40">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500">Stock: {product.stock}</p>
              <p className="text-primary font-semibold">৳{product.price}</p>
              <div className="card-actions justify-between mt-3">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => handleBuyNow(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPages;
