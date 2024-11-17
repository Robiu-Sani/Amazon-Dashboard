import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880"); // Default for Bangladesh

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
  } = useForm();

  const handleSignUp = (data) => {
    const fullPhoneNumber = `${selectedCountryCode}${data.phone}`;
    console.log("Sign Up Data:", { ...data, phone: fullPhoneNumber });
  };

  const phoneValidationRules = {
    "+880": /^[0-9]{9,10}$/,
    "+91": /^[0-9]{10}$/,
    "+92": /^[0-9]{10}$/,
    "+1": /^[0-9]{10}$/,
    "+44": /^[0-9]{10}$/,
    "+966": /^[0-9]{9,10}$/,
    "+971": /^[0-9]{9}$/,
    "+974": /^[0-9]{8}$/,
  };

  return (
    <form
      onSubmit={handleSubmitSignUp(handleSignUp)}
      className="flex flex-col gap-5"
    >
      <h1 className="text-center font-bold text-2xl sm:text-3xl">
        Create an Account
      </h1>

      {/* Email Field */}
      <div className="w-full">
        <label>Email</label>
        <input
          type="email"
          {...registerSignUp("email", { required: "Email is required" })}
          className="w-full my-1 rounded-md border outline-0 px-3 p-2"
          placeholder="Enter Your Email"
        />
        {errorsSignUp.email && (
          <p className="text-red-500 text-sm">{errorsSignUp.email.message}</p>
        )}
      </div>

      {/* Phone Number Field */}
      <div className="w-full">
        <label>Phone Number</label>
        <div className="grid grid-cols-4 gap-2">
          <select
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
            value={selectedCountryCode}
            onChange={(e) => setSelectedCountryCode(e.target.value)}
          >
            <option value="+880">+880</option>
            <option value="+91">+91</option>
            <option value="+92">+92</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+966">+966</option>
            <option value="+971">+971</option>
            <option value="+974">+974</option>
          </select>
          <input
            type="tel"
            {...registerSignUp("phone", {
              required: "Phone number is required",
              pattern: {
                value: phoneValidationRules[selectedCountryCode],
                message: "Enter a valid phone number",
              },
            })}
            className="w-full my-1 rounded-md border outline-0 px-3 p-2 col-span-3"
            placeholder="Enter Your Phone Number"
          />
        </div>
        {errorsSignUp.phone && (
          <p className="text-red-500 text-sm">{errorsSignUp.phone.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="w-full relative">
        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          {...registerSignUp("password", {
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
        {errorsSignUp.password && (
          <p className="text-red-500 text-sm">
            {errorsSignUp.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <input
        type="submit"
        value="Sign Up"
        className="w-full p-2 rounded-md font-semibold cursor-pointer text-white bg-gray-700"
      />
    </form>
  );
}
