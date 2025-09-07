import React, { useContext } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged out!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Logout Failed",
              text: err.message,
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-4">
      <div className="max-w-md w-full bg-base-100 rounded-2xl shadow-xl p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "https://i.pravatar.cc/150?img=3"}
                alt="Profile"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold">{user?.displayName || "User Name"}</h2>
          <p className="text-sm text-gray-500">{user?.email || "user@example.com"}</p>
        </div>

        {/* Account Info */}
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Membership:</span>
            <span>Standard</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Joined:</span>
            <span>Sep 7, 2025</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Email Verified:</span>
            <span>{user?.emailVerified ? "Yes" : "No"}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button className="btn btn-outline btn-primary w-full">
            Edit Profile
          </button>
          <button className="btn btn-error w-full" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
