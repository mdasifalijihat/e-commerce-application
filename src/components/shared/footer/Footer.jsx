import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-primary">SwiftCart</h2>
          <p className="mt-3 text-sm">
            A modern MERN e-commerce platform with user & admin dashboards,
            secure checkout, and product management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-primary">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-primary">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@swiftcart.com</li>
            <li>Phone: +880 123 456 789</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-sm">
        © {new Date().getFullYear()} SwiftCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
