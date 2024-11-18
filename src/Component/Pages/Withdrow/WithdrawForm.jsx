import { useForm } from "react-hook-form";
import { useState } from "react";

export default function WithdrawForm() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.account = selectedAccount;
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
    setSelectedAccount(null);
  };

  const accounts = [
    {
      value: "bkash",
      label: "বিকাশ",
      img: "https://freepnglogo.com/images/all_img/1701670291bKash-App-Logo-PNG.png",
    },
    {
      value: "nagad",
      label: "নগদ",
      img: "https://freelogopng.com/images/all_img/1679248828Nagad-Logo-PNG.png",
    },
    {
      value: "rocket",
      label: "রকেট",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT12VgBUxXDd2i17DbU1_o5hp-u6YxBBdSKkQ&s",
    },
    {
      value: "upay",
      label: "উপায়",
      img: "https://upload.wikimedia.org/wikipedia/bn/a/a8/%E0%A6%89%E0%A6%AA%E0%A6%BE%E0%A6%AF%E0%A6%BC_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png",
    },
    {
      value: "mCash",
      label: "এমক্যাশ",
      img: "https://play-lh.googleusercontent.com/8sY7fsOPPoXNt36tNQR9dOnpmbjaYaoXQ8e2U_m-Jd535v1W--Zp31JUFAT1j35lmA4",
    },
  ];

  const amount = watch("amount", 0);

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-6 w-full max-w-lg">
        <h2 className="text-lg font-bold text-green-700 mb-3">
          টাকা উত্তোলন করুন
        </h2>
        <p className="text-sm text-green-600">
          নিজের ই-ওয়ালেট থেকে টাকা উত্তোলনের জন্য ফর্মটি পূরণ করুন। অনুগ্রহ করে
          নিচের ফর্মটি সম্পূর্ণ করুন এবং সঠিক তথ্য প্রদান করুন।
        </p>
      </div>
      <div className="bg-white rounded-md shadow-md p-6 w-full max-w-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Custom Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              একাউন্ট সিলেক্ট করুন *
            </label>
            <div className="relative">
              <div className="border rounded-md p-2 cursor-pointer">
                <div
                  onClick={() => setSelectedAccount(null)}
                  className="flex items-center space-x-2"
                >
                  {selectedAccount ? (
                    <>
                      <img
                        src={
                          accounts.find(
                            (account) => account.value === selectedAccount
                          ).img
                        }
                        alt={selectedAccount}
                        className="w-6 h-6"
                      />
                      <span>
                        {
                          accounts.find(
                            (account) => account.value === selectedAccount
                          ).label
                        }
                      </span>
                    </>
                  ) : (
                    <span>একাউন্ট নির্বাচন করুন</span>
                  )}
                </div>
              </div>
              {selectedAccount === null && (
                <ul className="absolute z-10 bg-white border rounded-md w-full mt-1 shadow-md">
                  {accounts.map((account) => (
                    <li
                      key={account.value}
                      onClick={() => setSelectedAccount(account.value)}
                      className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100"
                    >
                      <img
                        src={account.img}
                        alt={account.value}
                        className="w-6 h-6"
                      />
                      <span>{account.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {!selectedAccount && (
              <p className="text-red-500 text-sm mt-1">
                অনুগ্রহ করে একাউন্ট সিলেক্ট করুন।
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
                  watch("withdrawType") === "instant"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
                onClick={() => setValue("withdrawType", "instant")}
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
                  checked={watch("withdrawType") === "instant"}
                  className="text-green-500 focus:ring-green-500"
                />
              </div>

              {/* Regular Payment */}
              <div
                className={`border rounded-md p-3 flex justify-between items-center cursor-pointer ${
                  watch("withdrawType") === "regular"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
                onClick={() => setValue("withdrawType", "regular")}
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
                  checked={watch("withdrawType") === "regular"}
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
