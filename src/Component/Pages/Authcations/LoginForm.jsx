import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useNavigate();

  const {
    register: registerUser,
    handleSubmit: handleSubmitUser,
    formState: { errors: errorsUser },
  } = useForm();

  const handleUserLogin = (data) => {
    console.log("User Login Data:", data);
  };

  const redirectToDashboard = () => {
    router("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmitUser(handleUserLogin)}
      className="flex flex-col gap-5"
    >
      <h1 className="text-center font-bold text-2xl sm:text-3xl">
        Welcome User
      </h1>

      {/* Email Field */}
      <div className="w-full">
        <label>Email or Number</label>
        <input
          type="text"
          {...registerUser("email", { required: "Email is required" })}
          className="w-full my-1 rounded-md border outline-0 px-3 p-2"
          placeholder="Enter Your Email or Number"
        />
        {errorsUser.email && (
          <p className="text-red-500 text-sm">{errorsUser.email.message}</p>
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
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message:
                "Password must be at least 6 characters long and include both letters and numbers",
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
          <p className="text-red-500 text-sm">{errorsUser.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <input
        onClick={redirectToDashboard}
        type="submit"
        value="Login"
        className="w-full p-2 rounded-md font-semibold cursor-pointer text-white bg-gray-700"
      />
    </form>
  );
}
