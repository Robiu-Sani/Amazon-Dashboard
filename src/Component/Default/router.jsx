import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import CommingSoon from "./CommingSoon";
import Login from "../Pages/Authcations/Login";
import CourierCheck from "../Pages/CourierCheck/CourierCheck";
import OrderReport from "../Pages/OrderReport/OrderReport";
import WithdrowReport from "../Pages/withdrowReport/withdrowReport";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Balance from "../Pages/Balance/Balance";
import Withdrow from "../Pages/Withdrow/Withdrow";
import PaymentSetting from "../Pages/PaymentSetting/PaymentSetting";
import OrderTraking from "../Pages/OrderTraking/OrderTraking";
import ProductRequest from "../Pages/ProductRequest/ProductRequest";
import SellerReview from "../Pages/SellerReview/SellerReview";
import Settings from "../Pages/Settings/Settings";
import Service from "../Pages/Service/Service";
import Support from "../Pages/Support/Support";
import VerifectionFrom from "../Pages/Verifections/VerifectionFrom";
import AllCategorys from "../Pages/AllProducts/AllCategorys";

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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/all-product",
        element: <AllCategorys />,
      },
      {
        path: "/category/:category",
        element: <AllProducts />,
      },
      // {
      //   path: "/dashboard",
      //   element: <CommingSoon />,
      // },
      {
        path: "/balance",
        element: <Balance />,
      },
      {
        path: "/withdraw",
        element: <Withdrow />,
      },
      {
        path: "/withdraw/payment-setting",
        element: <PaymentSetting />,
      },
      {
        path: "/withdraw/withdraw",
        element: <Withdrow />,
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
        element: <OrderTraking />,
      },
      {
        path: "/customer-checker",
        element: <CourierCheck />,
      },
      {
        path: "/product-request",
        element: <ProductRequest />,
      },
      {
        path: "/seller-review",
        element: <SellerReview />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/verifection",
        element: <VerifectionFrom />,
      },
      {
        path: "/logout",
        element: <CommingSoon />,
      },
    ],
  },
]);

export default router;
