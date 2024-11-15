import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import CommingSoon from "./CommingSoon";
import Login from "../Pages/Authcations/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <CommingSoon />,
      },
      {
        path: "/all-product",
        element: <CommingSoon />,
      },
      {
        path: "/dashboard",
        element: <CommingSoon />,
      },
      {
        path: "/balance",
        element: <CommingSoon />,
      },
      {
        path: "/withdraw",
        element: <CommingSoon />,
      },
      {
        path: "/withdraw/payment-setting",
        element: <CommingSoon />,
      },
      {
        path: "/withdraw/withdraw",
        element: <CommingSoon />,
      },
      {
        path: "/withdraw/withdraw-report",
        element: <CommingSoon />,
      },
      {
        path: "/order-report",
        element: <CommingSoon />,
      },
      {
        path: "/order-traking",
        element: <CommingSoon />,
      },
      {
        path: "/customer-checker",
        element: <CommingSoon />,
      },
      {
        path: "/product-request",
        element: <CommingSoon />,
      },
      {
        path: "/seller-review",
        element: <CommingSoon />,
      },
      {
        path: "/settings",
        element: <CommingSoon />,
      },
      {
        path: "/service",
        element: <CommingSoon />,
      },
      {
        path: "/support",
        element: <CommingSoon />,
      },
      {
        path: "/logout",
        element: <CommingSoon />,
      },
    ],
  },
]);

export default router;
