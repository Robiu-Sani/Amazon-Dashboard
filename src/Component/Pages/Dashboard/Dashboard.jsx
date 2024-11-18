import { FaSteam } from "react-icons/fa";
import DashboardTopSlider from "./DashboardTopSlider";
import {
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
  MdOutlinePayment,
  MdOutlinePayments,
  MdFactCheck,
} from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const navItems = [
    // { name: "ড্যাশবোর্ড", path: "/dashboard", icon: <MdDashboard /> },
    {
      name: "আমাদের সম্পর্কে",
      path: "/about-us",
      icon: <FaSteam />,
      class: "bg-gradient-to-br from-[#613EEA] to-[#eb380f]",
    },
    {
      name: "সব পণ্য",
      path: "/all-product",
      icon: <MdHome />,
      class: "bg-gradient-to-br from-[#F16E52] to-[#613EEA]",
    },
    {
      name: "ব্যালেন্স",
      path: "/balance",
      icon: <MdAccountBalance />,
      class: "bg-gradient-to-br from-[#526BF1] to-[#37DDBF]",
    },
    {
      name: "পেমেন্ট সেটিংস",
      path: "/withdraw/payment-setting",
      icon: <MdOutlinePayment />,
      class: "bg-gradient-to-br from-[#526BF1] to-[#37DDBF]",
    },
    {
      name: "উইথড্রো",
      path: "/withdraw/withdraw",
      icon: <RiSecurePaymentLine />,
      class: "bg-gradient-to-br from-[#AA1818] to-[#FCA204]",
    },
    {
      name: "উইথড্রো রিপোর্ট",
      path: "/withdraw/withdraw-report",
      icon: <MdOutlinePayments />,
      class: "bg-gradient-to-br from-[#AA1818] to-[#FCA204]",
    },
    {
      name: "উইথড্রো",
      path: "/withdraw",
      icon: <MdPayment />,
      class: "bg-gradient-to-br from-[#004328] to-[#0ABB75]",
    },
    {
      name: "অর্ডার রিপোর্ট",
      path: "/order-report",
      icon: <MdReceiptLong />,
      class: "bg-gradient-to-br from-[#004328] to-[#0ABB75]",
    },
    {
      name: "অর্ডার ট্র্যাকিং",
      path: "/order-traking",
      icon: <MdTimeline />,
      class: "bg-gradient-to-br from-[#AA1818] to-[#FCA204]",
    },
    {
      name: "কাস্টমার চেকার",
      path: "/customer-checker",
      icon: <MdGroups />,
      class: "bg-gradient-to-br from-[#F16E52] to-[#613EEA]",
    },
    {
      name: "পণ্য অনুরোধ",
      path: "/product-request",
      icon: <MdAssignment />,
      class: "bg-gradient-to-br from-[#AA1818] to-[#FCA204]",
    },
    {
      name: "বিক্রেতার রিভিউ",
      path: "/seller-review",
      icon: <MdRateReview />,
      class: "bg-gradient-to-br from-[#AA1818] to-[#FCA204]",
    },
    {
      name: "সেটিংস",
      path: "/settings",
      icon: <MdSettings />,
      class: "bg-gradient-to-br from-[#526BF1] to-[#37DDBF]",
    },
    {
      name: "সেবা",
      path: "/service",
      icon: <MdBuildCircle />,
      class: "bg-gradient-to-br from-[#526BF1] to-[#37DDBF]",
    },
    {
      name: "সাপোর্ট",
      path: "/support",
      icon: <MdSupportAgent />,
      class: "bg-gradient-to-br from-[#526BF1] to-[#37DDBF]",
    },
    {
      name: "ভেরিফিকেশন",
      path: "/verifection",
      icon: <MdFactCheck />,
      class: "bg-gradient-to-br from-[#004328] to-[#0ABB75]",
    },
    {
      name: "লগআউট",
      path: "/logout",
      icon: <MdExitToApp />,
      class: "bg-gradient-to-br from-[#004328] to-[#0ABB75]",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full rounded bg-gradient-to-r from-blue-500 to-cyan-500">
        <marquee className="text-white">
          At ProductFlow, we bring the world of shopping to your fingertips. Our
          platform is designed to provide a seamless and enjoyable shopping
          experience with a wide range of products to meet your every need.
          Whether you`re looking for the latest gadgets, trendy fashion,
          essential household items, or unique gifts, we have it all!
        </marquee>
      </div>
      <div className="w-full my-3  md:w-[calc(100vw-320px)] 2xl:w-[calc(100vw-300px)]">
        <DashboardTopSlider />
      </div>
      {/* --- dashboard cards ----------  */}
      <div
        className="w-full grid gap-3 "
        style={{
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
        }}
      >
        {navItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate(item.path)}
            className={`${
              item.class ? item.class : ""
            } w-full  p-3 py-3 group shadow-xl hover:shadow-sm text-base text-white cursor-pointer rounded-md border flex justify-between items-center`}
          >
            <h2>{item.name}</h2>
            <span
              className={`w-[40px] h-[40px] group-hover:text-gray-800 rounded-full text-xl flex justify-center items-center bg-gray-100/40`}
            >
              {item.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
