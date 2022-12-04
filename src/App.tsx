import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Delivery from "./components/Delivery/Delivery";
import Packaging from "./components/Packaging/Packaging";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";

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
