import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./router/route.jsx";
import { RouterProvider } from "react-router";
import BackgroundWrapper from "./Share/BackgroundWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BackgroundWrapper>
      <RouterProvider router={router} />
    </BackgroundWrapper>
  </StrictMode>
);
