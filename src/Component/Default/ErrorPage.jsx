import { MdWifiTetheringError } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-400 to-red-600 text-white">
      <div className="text-center p-10 rounded-xl shadow-2xl bg-white bg-opacity-95 max-w-md">
        <div className="flex justify-center mb-6">
          <MdWifiTetheringError className="text-8xl text-orange-500 " />
        </div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Sorry, Page Not Found!
        </h1>
        <p className="font-medium text-gray-700 mb-6">
          Oops! It seems like the page you`re looking for doesn`t exist on{" "}
          <span className="font-semibold text-orange-600">Relifemart</span>.
          Please check the URL or explore our store.
        </p>

        <Link
          to={"/"}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
