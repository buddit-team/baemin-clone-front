import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Delivery from "./pages/Delivery/Delivery";
import Packaging from "./pages/Packaging/Packaging";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import Root from "./components/Root/Root";
import RestaurantList from "./pages/RestaurantList/RestaurantList";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail";

const router = createBrowserRouter([
  {
    /* 루트 라우트 */
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    /* 중첩 라우트 */
    children: [
      { index: true, element: <Home /> },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/delivery/:categoryId",
        element: <RestaurantList />,
      },
      {
        path: "/packaging",
        element: <Packaging />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
