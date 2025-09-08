import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  price: yup.number().typeError("Price must be a number").required(),
  description: yup.string().required(),
  category: yup.string().required(),
  stock: yup.number().typeError("Stock must be a number").required(),
  discount: yup.number().typeError("Discount must be a number").optional(),
  sku: yup.string().required(),
  image: yup.string().url("Must be a valid URL").required(),
});

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const API_URL = "http://localhost:3000/products";

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add or Update Product
  const onSubmit = async (data) => {
    try {
      if (editingProduct) {
        // Update
        await axios.put(`${API_URL}/${editingProduct._id}`, data);
        Swal.fire("Updated!", "Product updated successfully.", "success");
        setEditingProduct(null);
      } else {
        // Add new
        await axios.post(API_URL, data);
        Swal.fire("Added!", "Product added successfully.", "success");
      }
      reset();
      fetchProducts();
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  // Edit Product
  const handleEdit = (product) => {
    setEditingProduct(product);
    reset(product); // prefill form
  };

  // Delete Product
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        Swal.fire("Deleted!", "Product has been deleted.", "success");
        fetchProducts();
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete product.", "error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="bg-base-100 rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <input
            {...register("name")}
            placeholder="Product Name"
            className="input input-bordered w-full"
          />
          <input
            {...register("price")}
            placeholder="Price"
            type="number"
            className="input input-bordered w-full"
          />
          <input
            {...register("category")}
            placeholder="Category"
            className="input input-bordered w-full"
          />
          <input
            {...register("stock")}
            placeholder="Stock Quantity"
            type="number"
            className="input input-bordered w-full"
          />
          <input
            {...register("discount")}
            placeholder="Discount / Offer Price"
            type="number"
            className="input input-bordered w-full"
          />
          <input
            {...register("sku")}
            placeholder="SKU / Code / Brand"
            className="input input-bordered w-full"
          />
          <input
            {...register("image")}
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          <textarea
            {...register("description")}
            placeholder="Description"
            className="textarea textarea-bordered w-full col-span-2"
          ></textarea>

          <button type="submit" className="btn btn-primary col-span-2">
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* Products List */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Discount</th>
                <th>SKU</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>৳{p.price}</td>
                  <td>{p.stock}</td>
                  <td>{p.discount || "-"}</td>
                  <td>{p.sku}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="btn btn-sm btn-info"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
