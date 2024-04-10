import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./components/productPage/ProductPage.jsx";
import ProductsPage from "./components/products/productsPage/ProductsPage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import SavedPage from "./pages/SavedPage/SavedPage.jsx";
import Product from "./components/products/product/Product.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
        children: [
          {
            path: "/",
            element: <Product />,
          },
          {
            path: "/saved",
            element: <SavedPage />,
          },
          {
            path: "/cart",
            element: <CartPage />,
          },
        ],
      },

      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/saved",
        element: <SavedPage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
