import { useState } from "react";
import LoginForm from "./LoginForm";
import SigUnpFrom from "./SigUnpFrom";

export default function Login() {
  const [activeForm, setActiveForm] = useState("user");

  return (
    <div className="bg-gray-100 w-full min-h-screen py-10 px-5 flex flex-col justify-center items-center">
      <div className="w-full sm:w-[450px] p-7 sm:p-10 bg-white rounded-md shadow-md">
        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-2">
          <button
            onClick={() => setActiveForm("user")}
            className={`px-4 py-2 w-full rounded-md font-semibold ${
              activeForm === "user" ? "bg-gray-700 text-white" : "bg-gray-200"
            }`}
          >
            User Login
          </button>
          <button
            onClick={() => setActiveForm("signup")}
            className={`px-4 py-2 w-full rounded-md font-semibold ${
              activeForm === "signup" ? "bg-gray-700 text-white" : "bg-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* User Login Form */}
        {activeForm === "user" && <LoginForm />}

        {/* Sign Up Form */}
        {activeForm === "signup" && <SigUnpFrom />}
      </div>
    </div>
  );
}
