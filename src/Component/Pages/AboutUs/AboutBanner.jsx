import { FaUsers } from "react-icons/fa";

export default function AboutBanner() {
  return (
    <div className="relative w-full mb-3 h-[150px] sm:h-[250px] bg-gradient-to-r from-indigo-400 to-purple-500 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-08/effective%20leader-new-2022.jpg"
          alt="Teamwork Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaUsers className="text-4xl sm:text-5xl" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            About Our Team
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Dedicated professionals working to make Relifemart the best shopping
          experience.
        </p>
      </div>
    </div>
  );
}
