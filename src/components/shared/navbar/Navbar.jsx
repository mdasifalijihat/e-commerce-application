import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          SwiftCart
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-base-200 transition"
          >
            {theme === "light" ? (
              <FiMoon className="text-xl" />
            ) : (
              <FiSun className="text-xl" />
            )}
          </button>

          {/* Auth placeholder */}
          <Link
            to="/login"
            className="btn btn-sm btn-primary rounded-full px-4 hidden md:flex"
          >
            Login
          </Link>

          {/* Mobile Menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-base-200"
          >
            <HiMenuAlt3 className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-primary font-semibold"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
