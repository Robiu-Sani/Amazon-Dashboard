import { FaCog } from "react-icons/fa";

export default function SettingBanner() {
  return (
    <div className="relative w-full mb-3 h-[150px] sm:h-[250px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://www.shutterstock.com/image-photo/document-management-system-dms-being-600nw-2135267769.jpg"
          alt="Settings Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaCog className="text-4xl sm:text-5xl animate-spin-slow" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Settings
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Customize your preferences and manage your account effortlessly.
        </p>
      </div>
    </div>
  );
}
