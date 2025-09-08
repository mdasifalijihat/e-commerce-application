import React from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

const Products = () => {
  // Dummy Products Data
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      stock: 12,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 22000,
      stock: 30,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Headphone",
      price: 3500,
      stock: 50,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="bg-base-100 rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Products Management</h2>
          <button className="btn btn-primary flex items-center gap-2">
            <FiPlus /> Add Product
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-md rounded-xl overflow-hidden"
            >
              <figure className="h-40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                <p className="text-primary font-semibold">৳{product.price}</p>
                <div className="card-actions justify-end mt-3">
                  <button className="btn btn-sm btn-outline btn-info flex items-center gap-1">
                    <FiEdit /> Edit
                  </button>
                  <button className="btn btn-sm btn-outline btn-error flex items-center gap-1">
                    <FiTrash2 /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
