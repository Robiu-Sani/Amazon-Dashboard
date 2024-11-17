import { useForm } from "react-hook-form";
import { useState } from "react";

export default function WithdrawForm() {
  const [withdrawType, setWithdrawType] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  const amount = watch("amount", 0);

  return (
    <div className=" flex flex-col gap-3 items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-6 w-full max-w-lg ">
        <h2 className="text-lg font-bold text-green-700 mb-3">
          টাকা উত্তোলন করুন
        </h2>
        <p className="text-sm text-green-600">
          নিজের ই-ওয়ালেট থেকে টাকা উত্তোলনের জন্য ফর্মটি পূরণ করুন। অনুগ্রহ করে
          নিচের ফর্মটি সম্পূর্ণ করুন এবং সঠিক তথ্য প্রদান করুন।
        </p>
      </div>
      <div className="bg-white rounded-md shadow-md p-6 w-full max-w-lg">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Select Account */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              একাউন্ট সিলেক্ট করুন *
            </label>
            <select
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("account", { required: "এই ঘরটি পূরণ করুন।" })}
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
            {errors.account && (
              <p className="text-red-500 text-sm mt-1">
                {errors.account.message}
              </p>
            )}
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              টাকার পরিমাণ *
            </label>
            <input
              type="number"
              placeholder="পরিমাণ লিখুন"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("amount", {
                required: "টাকার পরিমাণ দিন।",
                min: { value: 1, message: "পরিমাণ ১ টাকার বেশি হতে হবে।" },
              })}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.amount.message}
              </p>
            )}
            <p className="text-sm text-gray-600 mt-1">
              সর্বাধিক উত্তোলন ব্যালেন্স: {amount} টাকা।
            </p>
          </div>

          {/* Withdraw Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              উত্তোলনের ধরন সিলেক্ট করুন *
            </label>
            <div className="space-y-3 mt-2">
              {/* Instant Payment */}
              <div
                className={`border rounded-md p-3 flex justify-between items-center cursor-pointer ${
                  withdrawType === "instant"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
                onClick={() => setWithdrawType("instant")}
              >
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    ইন্সট্যান্ট পেমেন্ট
                  </h4>
                  <p className="text-xs text-gray-600">
                    রিয়েলটাইম উত্তোলনের জন্য ২৫ টাকা চার্জ।
                  </p>
                </div>
                <input
                  type="radio"
                  value="instant"
                  {...register("withdrawType", {
                    required: "উত্তোলনের ধরন সিলেক্ট করুন।",
                  })}
                  checked={withdrawType === "instant"}
                  className="text-green-500 focus:ring-green-500"
                />
              </div>

              {/* Regular Payment */}
              <div
                className={`border rounded-md p-3 flex justify-between items-center cursor-pointer ${
                  withdrawType === "regular"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
                onClick={() => setWithdrawType("regular")}
              >
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    রেগুলার পেমেন্ট
                  </h4>
                  <p className="text-xs text-gray-600">
                    চার্জ ০ টাকা। সময়: ১-৩ দিন।
                  </p>
                </div>
                <input
                  type="radio"
                  value="regular"
                  {...register("withdrawType", {
                    required: "উত্তোলনের ধরন সিলেক্ট করুন।",
                  })}
                  checked={withdrawType === "regular"}
                  className="text-green-500 focus:ring-green-500"
                />
              </div>
            </div>
            {errors.withdrawType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.withdrawType.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            সাবমিট
          </button>
        </form>
      </div>
    </div>
  );
}
