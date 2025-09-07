import React from "react";
import { FiUsers, FiShoppingCart, FiPackage, FiBell, FiUser } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-primary mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          <a href="/admin/dashboard" className="hover:bg-base-200 p-2 rounded-md flex items-center gap-2">
            <FiUsers /> Users
          </a>
          <a href="/admin/products" className="hover:bg-base-200 p-2 rounded-md flex items-center gap-2">
            <FiShoppingCart /> Products
          </a>
          <a href="/admin/orders" className="hover:bg-base-200 p-2 rounded-md flex items-center gap-2">
            <FiPackage /> Orders
          </a>
          <a href="/admin/profile" className="hover:bg-base-200 p-2 rounded-md flex items-center gap-2">
            <FiUser /> Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <FiBell className="text-xl cursor-pointer" />
            <div className="w-10 h-10 rounded-full overflow-hidden ring ring-primary ring-offset-base-100">
              <img src="https://i.pravatar.cc/150?img=3" alt="Admin" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <FiUsers className="text-3xl text-primary" />
              <div>
                <h2 className="text-lg font-medium">Total Users</h2>
                <p className="text-2xl font-bold">120</p>
              </div>
            </div>
          </div>

          <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <FiShoppingCart className="text-3xl text-primary" />
              <div>
                <h2 className="text-lg font-medium">Products</h2>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </div>

          <div className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <FiPackage className="text-3xl text-primary" />
              <div>
                <h2 className="text-lg font-medium">Orders</h2>
                <p className="text-2xl font-bold">78</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content placeholder */}
        <div className="mt-6 p-6 bg-base-100 rounded-2xl shadow">
          <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
          <p className="text-gray-500">No recent activity available.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
