import { Outlet } from "react-router-dom";
import SiteNavBar from "./RootCommon/SiteNavBar";
import DashboardHeader from "./RootCommon/DashboardHeader";
import Footer from "./Footer";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Root() {
  const [callNav, setCallNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Set loading state during window load
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Handle loader display
  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex p-3 justify-center items-center bg-gray-100">
        <Loader />
      </div>
    );
  }

  // Toggle sidebar
  const handleCallNav = (data) => {
    setCallNav(data);
  };

  return (
    <div className="bg-gray-100 shadow-md relative w-full flex h-screen">
      <div
        className={`w-full ${
          callNav ? "left-0" : "-left-[100%]"
        } absolute md:static z-[999999999] min-w-[260px] sm:max-w-[275px] border-0 sm:border-r bg-white min-h-screen overflow-y-auto`}
      >
        <span
          onClick={() => handleCallNav(false)}
          className="p-1 block md:hidden cursor-pointer rounded-md absolute top-2 right-2 border"
        >
          <RxCross2 />
        </span>
        <SiteNavBar handleCallNav={handleCallNav} />
      </div>
      <div className="w-full flex flex-col">
        <DashboardHeader handleCallNav={handleCallNav} />
        <div className="w-full h-[calc(100vh-90px)] overflow-y-auto p-3">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
