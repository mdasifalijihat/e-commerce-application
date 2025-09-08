import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/auth/Profile";
import AdminDashboard from "../pages/dashboard/admin/AdmonDashborad";
import Orders from "../pages/dashboard/adminpage/Orders";
import Products from "../pages/dashboard/adminpage/Products";
import Users from "../pages/dashboard/adminpage/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  // Admin Routes
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/products",
    element: <Products />,
  },
  {
    path: "/admin/orders",
    element: <Orders />,
  },
  {
    path: "/admin/users",
    element: <Users />,
  },
]);
