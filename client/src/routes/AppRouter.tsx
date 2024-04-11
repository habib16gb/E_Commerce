import { MainLayout } from "@layouts/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Categories,
  Products,
  About,
  Product,
  Login,
  Register,
  Error,
  Category,
} from "@pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:prefix",
        element: <Category />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 404,
            });
          }
          return true;
        },
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: ({ params }) => {
          if (typeof params.id !== "string" || !/^[a-z]+$/i.test(params.id)) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 404,
            });
          }
          return true;
        },
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
