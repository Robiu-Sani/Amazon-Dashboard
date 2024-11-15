import { useState } from "react";
import axios from "axios";

const CourierCheck = () => {
  const [phone, setPhone] = useState(""); // Phone number state
  const [responseData, setResponseData] = useState(null); // API response state
  const [error, setError] = useState(null); // Error state
  const apiKey = "ktlY9kJCbKJukmakVNtvpgHpZ3Tm83vPBtmAKfHWCDyhn9wlas7G0OUIUXWS"; // Your API key

  const handleCheck = async () => {
    if (!phone.trim()) {
      setError("Please enter a valid phone number.");
      return;
    }
    try {
      const response = await axios.post(
        `https://bdcourier.com/api/courier-check?phone=${phone}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setResponseData(response.data.courierData || {}); // Set the courier data from the response
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err.message);
      setError("Something went wrong. Please try again."); // Set error message
      setResponseData(null); // Clear previous data on error
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <div className="w-full  p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Courier Check
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={handleCheck}
          className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
        >
          Check Courier
        </button>

        <div className="mt-6">
          {responseData && (
            <div className="overflow-x-auto bg-white border border-gray-300 rounded-md p-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Courier Data
              </h3>
              <table className="w-full border text-center text-gray-800">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border">Courier Name</th>
                    <th className="py-2 px-4 border">Total Parcels</th>
                    <th className="py-2 px-4 border">Successful Parcels</th>
                    <th className="py-2 px-4 border">Cancelled Parcels</th>
                    <th className="py-2 px-4 border">Success Ratio (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(responseData).map(([courier, data]) => (
                    <tr key={courier} className="border-t">
                      <td className="py-2 px-4 border capitalize">{courier}</td>
                      <td className="py-2 px-4 border">
                        {data?.total_parcel || 0}
                      </td>
                      <td className="py-2 px-4 border">
                        {data?.success_parcel || 0}
                      </td>
                      <td className="py-2 px-4 border">
                        {data?.cancelled_parcel || 0}
                      </td>
                      <td className="py-2 px-4 border">
                        {data?.success_ratio || 0}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CourierCheck;
