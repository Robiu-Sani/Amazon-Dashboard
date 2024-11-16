import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import CommingSoon from "./CommingSoon";
import Login from "../Pages/Authcations/Login";
import CourierCheck from "../Pages/CourierCheck/CourierCheck";
import OrderReport from "../Pages/OrderReport/OrderReport";
import WithdrowReport from "../Pages/withdrowReport/withdrowReport";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/all-product",
        element: <CommingSoon />,
      },
      // {
      //   path: "/dashboard",
      //   element: <CommingSoon />,
      // },
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
        element: <WithdrowReport />,
      },
      {
        path: "/order-report",
        element: <OrderReport />,
      },
      {
        path: "/order-traking",
        element: <CommingSoon />,
      },
      {
        path: "/customer-checker",
        element: <CourierCheck />,
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
