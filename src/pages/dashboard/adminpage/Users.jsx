import React from "react";
import { FiTrash2, FiUserCheck } from "react-icons/fi";

const Users = () => {
  // Dummy users data
  const users = [
    {
      id: 1,
      name: "Asif Ali",
      email: "asif@example.com",
      role: "Admin",
      joined: "2025-01-10",
    },
    {
      id: 2,
      name: "Jihan",
      email: "jihan@example.com",
      role: "User",
      joined: "2025-02-15",
    },
    {
      id: 3,
      name: "Mehedi",
      email: "mehedi@example.com",
      role: "User",
      joined: "2025-03-05",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="bg-base-100 rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-primary mb-6">All Users</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-base-300 text-sm">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id} className="hover">
                  <td>{idx + 1}</td>
                  <td className="font-medium">{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        user.role === "Admin"
                          ? "badge-primary"
                          : "badge-secondary"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td>{user.joined}</td>
                  <td className="flex gap-2">
                    {user.role !== "Admin" && (
                      <button className="btn btn-xs btn-success flex items-center gap-1">
                        <FiUserCheck /> Make Admin
                      </button>
                    )}
                    <button className="btn btn-xs btn-error flex items-center gap-1">
                      <FiTrash2 /> Delete
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

export default Users;
