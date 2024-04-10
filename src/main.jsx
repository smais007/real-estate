import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/PublicRoutes";
import { EstateCardProvider } from "./contexts/EstateCardProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EstateCardProvider>
      <RouterProvider router={router} />
    </EstateCardProvider>
  </React.StrictMode>
);
