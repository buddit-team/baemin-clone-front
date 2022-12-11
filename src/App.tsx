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
import SearchPage from "./pages/SearchPage";
import Likes from "./pages/Likes/Likes";
import MenuDetail from "./pages/MenuDetail/MenuDetail";
import MyPage from "./pages/MyPage/MyPage";
import OrderList from "./pages/OrderList/OrderList";
import Pay from "./pages/Pay/Pay";

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
        path: "/search",
        element: <SearchPage />,
      },
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
      {
        path: "/likes",
        element: <Likes />,
      },
      {
        path: "/menuDetail/:menuId",
        element: <MenuDetail />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/orderList",
        element: <OrderList />,
      },
      {
        path: "/pay",
        element: <Pay />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
