import App from "@/App";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",
        
      }
    ],
  },
]);

export default router