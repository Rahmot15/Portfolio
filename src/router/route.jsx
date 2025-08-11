import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projectDetails/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);
