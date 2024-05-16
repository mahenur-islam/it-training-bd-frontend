import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/add-property",
        element: <AddProperty />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);
