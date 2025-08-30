import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import CommonLayout from "@/layout/CommonLayout";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout><Home /></CommonLayout>,
  },
  {
    path: "/about",
    element: <CommonLayout><About /></CommonLayout>,
  },
  {
    path: "/features",
    element: <CommonLayout><Features /></CommonLayout>,
  },
  {
    path: "/pricing",
    element: <CommonLayout><Pricing /></CommonLayout>,
  },
  {
    path: "/contact",
    element: <CommonLayout><Contact /></CommonLayout>,
  },
  {
    path: "/faq",
    element: <CommonLayout><FAQ /></CommonLayout>,
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },
]);

export default router