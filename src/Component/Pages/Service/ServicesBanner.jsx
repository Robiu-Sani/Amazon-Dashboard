import { FaServicestack } from "react-icons/fa";

export default function ServicesBanner() {
  return (
    <div className="relative w-full mb-3 h-[150px] sm:h-[250px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qvgROkNt9BK_yxCs89dxus7JQ3ePwmJJ1w&s"
          alt="Services Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaServicestack className="text-4xl sm:text-5xl" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Our Services
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Delivering innovative solutions to meet your needs every day.
        </p>
      </div>
    </div>
  );
}
