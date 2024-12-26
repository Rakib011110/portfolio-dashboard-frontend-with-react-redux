import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import MainLayout from "../MainLayout/MainLayout";
import { BrowserRouter } from "react-router";

const router = BrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
