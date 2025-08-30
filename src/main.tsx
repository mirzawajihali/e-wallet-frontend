import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";


import router from "./routes/index.tsx";
import { Toaster } from "sonner";
import ThemeProvider from "./providers/theme-provider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster/>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);