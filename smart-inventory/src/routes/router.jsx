import { createBrowserRouter } from "react-router-dom";
import Banner from "../Pages/Home/Banner/Banner";
import Inventory from "../Pages/Inventory/Inventory";
import Orders from "../Pages/Orders/Orders";
import Suppliers from "../Pages/Suppliers/Suppliers";
import Products from "../Pages/Products/Products";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "banner", element: <Banner /> },
      { path: "inventory", element: <Inventory /> },
      { path: "orders", element: <Orders /> },
      { path: "suppliers", element: <Suppliers /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

export default router;
