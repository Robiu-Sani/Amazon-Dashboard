import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeForm, setActiveForm] = useState("user");
  const router = useNavigate();

  const {
    register: registerUser,
    handleSubmit: handleSubmitUser,
    formState: { errors: errorsUser },
  } = useForm();

  const {
    register: registerAdmin,
    handleSubmit: handleSubmitAdmin,
    formState: { errors: errorsAdmin },
  } = useForm();

  const handleUserLogin = (data) => {
    console.log("User Login Data:", data);
  };

  const handleAdminLogin = (data) => {
    console.log("Admin Login Data:", data);
  };

  const RederectToHome = () => {
    router("/home");
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen py-10 px-5 flex flex-col justify-center items-center">
      <div className="w-full sm:w-[450px] p-7 sm:p-10 bg-white rounded-md shadow-md">
        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-2 ">
          <button
            onClick={() => setActiveForm("user")}
            className={`px-4 py-2 w-full rounded-md font-semibold ${
              activeForm === "user" ? "bg-gray-700 text-white" : "bg-gray-200"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setActiveForm("admin")}
            className={`px-4 w-full py-2 rounded-md font-semibold ${
              activeForm === "admin" ? "bg-gray-700 text-white" : "bg-gray-200"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Login Form */}
        {activeForm === "user" && (
          <form
            onSubmit={handleSubmitUser(handleUserLogin)}
            className=" flex flex-col gap-5"
          >
            <h1 className="text-center font-bold text-2xl sm:text-3xl">
              Welcome User
            </h1>

            {/* Email Field */}
            <div className="w-full">
              <label>Email</label>
              <input
                type="email"
                {...registerUser("email", { required: "Email is required" })}
                className="w-full my-1 rounded-md border outline-0 px-3 p-2"
                placeholder="Enter Your Email"
              />
              {errorsUser.email && (
                <p className="text-red-500 text-sm">
                  {errorsUser.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="w-full relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...registerUser("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^\d{5}$/,
                    message: "Password must be a 5-digit number",
                  },
                })}
                className="w-full my-1 rounded-md border outline-0 px-3 p-2"
                placeholder="Enter Your Password"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-10 right-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errorsUser.password && (
                <p className="text-red-500 text-sm">
                  {errorsUser.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <input
              onClick={RederectToHome}
              type="submit"
              value="Login"
              className="w-full p-2 rounded-md font-semibold cursor-pointer text-white bg-gray-700"
            />
          </form>
        )}

        {activeForm === "admin" && (
          <form
            onSubmit={handleSubmitAdmin(handleAdminLogin)}
            className=" flex flex-col gap-5"
          >
            <h1 className="text-center font-bold text-2xl sm:text-3xl">
              Welcome Admin
            </h1>

            {/* Email Field */}
            <div className="w-full">
              <label>Email</label>
              <input
                type="email"
                {...registerAdmin("email", { required: "Email is required" })}
                className="w-full my-1 rounded-md border outline-0 px-3 p-2"
                placeholder="Enter Admin Email"
              />
              {errorsAdmin.email && (
                <p className="text-red-500 text-sm">
                  {errorsAdmin.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="w-full relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...registerAdmin("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^\d{5}$/,
                    message: "Password must be a 5-digit number",
                  },
                })}
                className="w-full my-1 rounded-md border outline-0 px-3 p-2"
                placeholder="Enter Admin Password"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-10 right-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errorsAdmin.password && (
                <p className="text-red-500 text-sm">
                  {errorsAdmin.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <input
              onClick={RederectToHome}
              type="submit"
              value="Login"
              className="w-full p-2 rounded-md font-semibold cursor-pointer text-white bg-gray-700"
            />
          </form>
        )}
      </div>
    </div>
  );
}
