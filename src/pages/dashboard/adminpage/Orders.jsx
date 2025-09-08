import React from "react";
import { FiEye, FiCheckCircle, FiXCircle } from "react-icons/fi";

const Orders = () => {
  // Dummy orders data
  const orders = [
    { id: "ORD001", customer: "Asif Ali", product: "Laptop", amount: 55000, status: "Pending", date: "2025-09-01" },
    { id: "ORD002", customer: "Rana Khan", product: "Smartphone", amount: 22000, status: "Shipped", date: "2025-09-03" },
    { id: "ORD003", customer: "Admin", product: "Headphone", amount: 3500, status: "Delivered", date: "2025-09-05" },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="bg-base-100 shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Orders Management</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Head */}
            <thead>
              <tr className="text-primary">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover">
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>৳{order.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === "Pending"
                          ? "badge-warning"
                          : order.status === "Shipped"
                          ? "badge-info"
                          : "badge-success"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-sm btn-outline btn-info flex items-center gap-1">
                      <FiEye /> View
                    </button>
                    <button className="btn btn-sm btn-outline btn-success flex items-center gap-1">
                      <FiCheckCircle /> Approve
                    </button>
                    <button className="btn btn-sm btn-outline btn-error flex items-center gap-1">
                      <FiXCircle /> Cancel
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

export default Orders;
