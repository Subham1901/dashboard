import React from "react";
import { createRoot } from "react-dom/client";
import App, { browserRouter } from "./App";
import "./style.css";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={browserRouter}>
    <App />
  </RouterProvider>
);
