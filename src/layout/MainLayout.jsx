import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";
import MobileBottomNav from "../components/shared/navbar/MobileBottomNav";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  const isLoggedIn = false;
  const cartCount = 3;
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{<Outlet />}</div>
      <MobileBottomNav isLoggedIn={isLoggedIn} cartCount={cartCount} />
      <Footer />
    </>
  );
};

export default MainLayout;
