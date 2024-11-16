import { FaHeadset } from "react-icons/fa";

export default function SupportBanner() {
  return (
    <div className="relative w-full mb-3 h-[150px] sm:h-[250px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZa7bMA6ecc0PQP4YEqPTqaHoUsh981NR4A&s"
          alt="Customer Support Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaHeadset className="text-4xl sm:text-5xl" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            24/7 Support
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Always ready to assist with your needs, anytime.
        </p>
      </div>
    </div>
  );
}
