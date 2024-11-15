import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdHome,
  MdAccountBalance,
  MdPayment,
  MdReceiptLong,
  MdTimeline,
  MdGroups,
  MdAssignment,
  MdRateReview,
  MdSettings,
  MdBuildCircle,
  MdSupportAgent,
  MdExitToApp,
  MdArrowForwardIos,
  MdOutlinePayment,
  MdOutlinePayments,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine, RiSecurePaymentLine } from "react-icons/ri";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
  { name: "All Products", path: "/all-product", icon: <MdHome /> },
  { name: "Balance", path: "/balance", icon: <MdAccountBalance /> },
  {
    name: "Withdraw",
    path: "/withdraw",
    icon: <MdPayment />,
    children: [
      {
        name: "Payment Setting",
        path: "/withdraw/payment-setting",
        icon: <MdOutlinePayment />,
      },
      {
        name: "Withdrow",
        path: "/withdraw/withdraw",
        icon: <RiSecurePaymentLine />,
      },
      {
        name: "Withdrow Report",
        path: "/withdraw/withdraw-report",
        icon: <MdOutlinePayments />,
      },
    ],
  },
  { name: "Order Report", path: "/order-report", icon: <MdReceiptLong /> },
  { name: "Order Tracking", path: "/order-traking", icon: <MdTimeline /> },
  { name: "Customer Checker", path: "/customer-checker", icon: <MdGroups /> },
  { name: "Product Request", path: "/product-request", icon: <MdAssignment /> },
  { name: "Seller Review", path: "/seller-review", icon: <MdRateReview /> },
  { name: "Settings", path: "/settings", icon: <MdSettings /> },
  { name: "Service", path: "/service", icon: <MdBuildCircle /> },
  { name: "Support", path: "/support", icon: <MdSupportAgent /> },
  { name: "Logout", path: "/logout", icon: <MdExitToApp /> },
];

export default function SiteNavBar({ handleCallNav }) {
  const [openMenu, setOpenMenu] = useState({});

  const toggleMenu = (index) => {
    setOpenMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full h-full bg-white p-4 flex flex-col gap-5">
      <div className="w-full  border-b py-5">
        <h2 className="text-2xl font-bold text-center">Relifemart</h2>
        <div className=" flex w-full justify-center items-center gap-2">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s"
            }
            alt="Relifemart"
            className="mx-auto min-w-[50px] max-w-[51px] rounded-full min-h-[50px] max-h-[51px]"
          />
          <div className="w-full flex flex-col ">
            <h3 className=" font-medium leading-[-8px] text-gray-600">
              User name
            </h3>
            <small className="text-sm font-medium leading-[-12px] text-gray-600">
              01*********
            </small>{" "}
            <small className="text-sm font-medium leading-[-12px] text-gray-600">
              ID : 12354
            </small>
          </div>
        </div>
      </div>
      <div className="w-full dashboard h-[calc(100vh-230px)] scroll-none overflow-y-scroll">
        {navItems.map((item, index) => (
          <div key={index} className="w-full">
            {item.children ? (
              <div
                className={`w-full gap-2 p-1 rounded-md px-3 my-1 cursor-pointer ${
                  openMenu[index]
                    ? "bg-[rgba(0,10,27,0.74)] text-white"
                    : "text-gray-700"
                }`}
                onClick={() => toggleMenu(index)}
              >
                <div className="w-full flex justify-between  items-center">
                  <NavLink
                    to={item.path}
                    onClick={() => handleCallNav(false)}
                    className="flex gap-3  items-center"
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                  <MdArrowForwardIos
                    className={`transition-transform ${
                      openMenu[index] ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {openMenu[index] && (
                  <div className="w-full flex flex-col gap-1 mt-2">
                    {item.children.map((child, idx) => (
                      <NavLink
                        key={idx}
                        to={child.path}
                        onClick={() => handleCallNav(false)}
                        className={({ isActive }) =>
                          `w-full flex items-center gap-2 p-1 rounded-md px-3 ${
                            isActive
                              ? "bg-white !text-gray-900"
                              : "hover:!text-gray-900 text-gray-200 hover:bg-gray-100"
                          }`
                        }
                        style={{ color: openMenu[index] ? "white" : "" }}
                      >
                        {child.icon}
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path}
                onClick={() => handleCallNav(false)}
                className={({ isActive }) =>
                  `w-full flex items-center gap-2 p-1 rounded-md px-3 ${
                    isActive
                      ? "bg-[rgba(0,10,27,0.74)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-[40px] flex justify-center items-center">
        <button className="w-full px-3 p-2 rounded-md flex border justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <FaUserCircle className="text-3xl" />
            <h2 className="font-semibold">Admin</h2>
          </div>
          <RiLogoutCircleRLine />
        </button>
      </div>
    </div>
  );
}
