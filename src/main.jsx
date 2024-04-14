import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/PublicRoutes";
import { EstateCardProvider } from "./contexts/EstateCardProvider";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <AuthProvider>
      <EstateCardProvider>
        <RouterProvider router={router} />
      </EstateCardProvider>
    </AuthProvider>
  </React.StrictMode>
);
