import { useState, useEffect } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function AddPaymentMethod() {
  const [accounts, setAccounts] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Load accounts from localStorage when the component mounts
  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    setAccounts(storedAccounts);
  }, []);

  // Save data to localStorage and update the state
  const saveToLocalStorage = (newAccount) => {
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    toast.success("সফলভাবে সংরক্ষণ করা হয়েছে!"); // Toast notification
  };

  // Form submit handler
  const onSubmit = (data) => {
    saveToLocalStorage(data);
    reset(); // Clear form
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* Toast Notification */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Left Section */}
      <div className="w-full flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-start items-center gap-3 p-4 shadow-md rounded-md bg-white">
          <MdOutlinePayment className="text-2xl text-gray-500" />
          <p className="text-lg font-semibold text-gray-700">অ্যাড একাউন্ট</p>
        </div>

        {/* Form */}
        <form
          className="w-full p-5 rounded-md bg-white shadow-md space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              মোবাইল পেমেন্ট মেথড
            </label>
            <select
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              {...register("paymentMethod", { required: "এই ঘরটি পূরণ করুন।" })}
            >
              <option value="" disabled selected>
                মেথড নির্বাচন করুন
              </option>
              <option value="bkash">বিকাশ</option>
              <option value="nagad">নগদ</option>
              <option value="rocket">রকেট</option>
              <option value="upay">উপায়</option>
              <option value="mCash">এমক্যাশ</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm mt-1">
                {errors.paymentMethod.message}
              </p>
            )}
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              একাউন্ট নাম্বার
            </label>
            <input
              type="text"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="আপনার একাউন্ট নাম্বার লিখুন"
              {...register("accountNumber", {
                required: "একাউন্ট নাম্বার প্রদান করুন।",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "একাউন্ট নাম্বার ১১ সংখ্যার হতে হবে।",
                },
              })}
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountNumber.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
          >
            সেভ করুন
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full">
        <div className="p-5 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            একাউন্ট লিস্ট
          </h2>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2 text-left">#</th>
                <th className="border border-gray-200 p-2 text-left">
                  পেমেন্ট মেথড
                </th>
                <th className="border border-gray-200 p-2 text-left">
                  একাউন্ট নাম্বার
                </th>
              </tr>
            </thead>
            <tbody>
              {accounts.length > 0 ? (
                accounts.map((account, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 p-2">{index + 1}</td>
                    <td className="border border-gray-200 p-2">
                      {account.paymentMethod}
                    </td>
                    <td className="border border-gray-200 p-2">
                      {account.accountNumber}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center text-gray-500 p-4 border"
                  >
                    কোনও তথ্য পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
