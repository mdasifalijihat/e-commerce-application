import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/auth/profile";
import AdminDashboard from "../pages/dashboard/admin/AdmonDashborad";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/profile", Component: Profile },
    ],
  },
  {
    path:'/adminDashboard',element:<AdminDashboard></AdminDashboard>
  }
]);
