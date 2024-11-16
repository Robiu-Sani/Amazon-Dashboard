import DashboardTopSlider from "./DashboardTopSlider";
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
  MdOutlinePayment,
  MdOutlinePayments,
} from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const navItems = [
    { name: "ড্যাশবোর্ড", path: "/dashboard", icon: <MdDashboard /> },
    { name: "সব পণ্য", path: "/all-product", icon: <MdHome /> },
    { name: "ব্যালেন্স", path: "/balance", icon: <MdAccountBalance /> },
    {
      name: "পেমেন্ট সেটিংস",
      path: "/withdraw/payment-setting",
      icon: <MdOutlinePayment />,
    },
    {
      name: "উইথড্রো",
      path: "/withdraw/withdraw",
      icon: <RiSecurePaymentLine />,
    },
    {
      name: "উইথড্রো রিপোর্ট",
      path: "/withdraw/withdraw-report",
      icon: <MdOutlinePayments />,
    },
    {
      name: "উইথড্রো",
      path: "/withdraw",
      icon: <MdPayment />,
    },
    { name: "অর্ডার রিপোর্ট", path: "/order-report", icon: <MdReceiptLong /> },
    { name: "অর্ডার ট্র্যাকিং", path: "/order-traking", icon: <MdTimeline /> },
    {
      name: "কাস্টমার চেকার",
      path: "/customer-checker",
      icon: <MdGroups />,
    },
    {
      name: "পণ্য অনুরোধ",
      path: "/product-request",
      icon: <MdAssignment />,
    },
    { name: "বিক্রেতার রিভিউ", path: "/seller-review", icon: <MdRateReview /> },
    { name: "সেটিংস", path: "/settings", icon: <MdSettings /> },
    { name: "সেবা", path: "/service", icon: <MdBuildCircle /> },
    { name: "সাপোর্ট", path: "/support", icon: <MdSupportAgent /> },
    { name: "লগআউট", path: "/logout", icon: <MdExitToApp /> },
  ];

  return (
    <div className="w-full">
      <div className="w-full mb-3 md:w-[calc(100vw-270px)]">
        <DashboardTopSlider />
      </div>
      {/* --- dashboard cards ----------  */}
      <div
        className="w-full grid gap-3"
        style={{
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
        }}
      >
        {navItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate(item.path)}
            className="w-full p-3 bg-white cursor-pointer rounded-md border flex justify-between items-center"
          >
            <h2>{item.name}</h2>
            <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gray-100">
              {item.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
