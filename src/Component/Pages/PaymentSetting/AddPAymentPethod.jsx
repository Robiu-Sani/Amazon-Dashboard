import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddPaymentMethod() {
  const [accounts, setAccounts] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const paymentMethods = [
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

  // Load accounts from localStorage on mount
  useEffect(() => {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    setAccounts(storedAccounts);
  }, []);

  // Save account to localStorage
  const saveToLocalStorage = (newAccount) => {
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    toast.success("সফলভাবে সংরক্ষণ করা হয়েছে!");
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const accountNumber = e.target.accountNumber.value;

    if (!selectedMethod) {
      toast.error("পেমেন্ট মেথড নির্বাচন করুন।");
      return;
    }

    if (!/^\d{11}$/.test(accountNumber)) {
      toast.error("একাউন্ট নাম্বার ১১ সংখ্যার হতে হবে।");
      return;
    }

    const newAccount = {
      paymentMethod: selectedMethod.label,
      accountNumber,
      img: selectedMethod.img,
    };

    saveToLocalStorage(newAccount);
    setSelectedMethod(null);
    e.target.reset();
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
      {/* Toast Notification */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Left Section */}
      <div className="w-full flex flex-col gap-4">
        <form
          className="p-5 rounded-md bg-white shadow-md space-y-5"
          onSubmit={handleFormSubmit}
        >
          {/* Payment Method Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              মোবাইল পেমেন্ট মেথড
            </label>
            <div
              className="border p-2 rounded-md cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedMethod ? (
                <div className="flex items-center gap-3">
                  <img
                    src={selectedMethod.img}
                    alt={selectedMethod.label}
                    className="w-8 h-8 object-contain"
                  />
                  <span>{selectedMethod.label}</span>
                </div>
              ) : (
                <span className="text-gray-400">মেথড নির্বাচন করুন</span>
              )}
            </div>
            {dropdownOpen && (
              <ul className="absolute z-10 bg-white border rounded-md shadow-lg mt-2 w-full max-h-60 overflow-y-auto">
                {paymentMethods.map((method) => (
                  <li
                    key={method.value}
                    className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSelectedMethod(method);
                      setDropdownOpen(false);
                    }}
                  >
                    <img
                      src={method.img}
                      alt={method.label}
                      className="w-8 h-8 object-contain"
                    />
                    <span>{method.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Account Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              একাউন্ট নাম্বার
            </label>
            <input
              type="text"
              name="accountNumber"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="আপনার একাউন্ট নাম্বার লিখুন"
            />
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
                    <td className="border border-gray-200 p-2 flex items-center gap-2">
                      <img
                        src={account.img}
                        alt={account.paymentMethod}
                        className="w-6 h-6 object-contain"
                      />
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
