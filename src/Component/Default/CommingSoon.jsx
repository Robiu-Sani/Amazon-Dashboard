import { FaHourglassHalf } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="min-h-[calc(100vh-120px)]  flex items-center justify-center">
      <div className="text-center text-white bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg bg-opacity-80">
        <div className="flex justify-center mb-4">
          <FaHourglassHalf className="text-6xl animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-6">
          We`re working hard to bring something amazing to you. Stay tuned for
          updates!
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
          Notify Us
        </button>
      </div>
    </div>
  );
}
