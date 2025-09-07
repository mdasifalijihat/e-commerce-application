import React from "react";
import { Link } from "react-router";
import { FiUser, FiLogIn, FiUserPlus, FiShoppingCart } from "react-icons/fi";

const MobileBottomNav = ({ isLoggedIn = false, cartCount = 0 }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-base-100 border-t shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        {!isLoggedIn ? (
          <>
            {/* Login Button */}
            <Link
              to="/login"
              className="flex flex-col items-center text-sm text-primary"
            >
              <FiLogIn className="text-xl" />
              Login
            </Link>

            {/* Register Button */}
            <Link
              to="/register"
              className="flex flex-col items-center text-sm text-primary"
            >
              <FiUserPlus className="text-xl" />
              Register
            </Link>
          </>
        ) : (
          <>
            {/* Cart Button */}
            <Link
              to="/cart"
              className="flex flex-col items-center text-sm relative"
            >
              <FiShoppingCart className="text-xl" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile Button */}
            <Link
              to="/dashboard/user"
              className="flex flex-col items-center text-sm text-primary"
            >
              <FiUser className="text-xl" />
              Profile
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileBottomNav;
