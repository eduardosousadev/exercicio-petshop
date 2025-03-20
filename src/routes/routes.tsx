import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { Home } from "../pages/home/home";
import { Cart } from "../pages/cart/cart";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);