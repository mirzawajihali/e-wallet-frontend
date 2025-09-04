import App from "@/App";
import { role } from "@/constants/role";
import DashboardLayout from "@/layout/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/Unauthorized";
import type { TRole } from "@/types/authType";
import { generateRoutes } from "@/utils/generateRoute";
import { withAuth } from "@/utils/withAuth";


import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import GoogleCallback from "@/modules/Auth/GoogleCallback";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",

      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: Pricing,
        path: "/pricing",
      },
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: FAQ,
        path: "/faq",
      },
    ],
  },
    {
        Component : withAuth(DashboardLayout, role.admin as TRole),
        path : "/admin",
        children : [
            {index : true, element : <Navigate to="/admin/analytics"/>},
          ...  generateRoutes(adminSidebarItems)  
        ]
    },
    {
        Component : withAuth(DashboardLayout, role.agent as TRole),
        path : "/agent",
        children : [
            {index : true, element : <Navigate to="/agent/agent-profile"/>},
          ...  generateRoutes(agentSidebarItems)  
        ]
    },
    {
        Component : withAuth(DashboardLayout, role.user as TRole),
        path : "/user",
        children : [
            {index : true, element : <Navigate to="/user/my-wallet"/>},
          ...  generateRoutes(userSidebarItems)  
        ]
    },
    

  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
  {
    Component: NotFound,
    path: "/not-found",
  },
  {
  path: '/auth/google/callback',
  element: <GoogleCallback />
}


]);

export default router