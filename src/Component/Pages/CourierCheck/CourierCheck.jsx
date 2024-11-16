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
      setResponseData(response.data); // Set the API response data
      console.log(response.data)
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err.message);
      setError("Something went wrong. Please try again."); // Set error message
      setResponseData(null); // Clear previous data on error
    }
  };

  return (
    <div className="flex  justify-center  bg-gray-100 px-4">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
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
        {responseData?.courierData && (
                <div className="bg-white border border-gray-300 p-4 rounded-md">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">Courier Data</h3>
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Courier Name</th>
                        <th className="border border-gray-300 px-4 py-2">Total Parcels</th>
                        <th className="border border-gray-300 px-4 py-2">Successful Parcels</th>
                        <th className="border border-gray-300 px-4 py-2">Cancelled Parcels</th>
                        <th className="border border-gray-300 px-4 py-2">Success Ratio (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(responseData.courierData).map(([courier, details]) =>
                        courier !== "summary" ? (
                          <tr key={courier} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2 capitalize">{courier}</td>
                            <td className="border border-gray-300 px-4 py-2">{details.total_parcel}</td>
                            <td className="border border-gray-300 px-4 py-2">{details.success_parcel}</td>
                            <td className="border border-gray-300 px-4 py-2">{details.cancelled_parcel}</td>
                            <td className="border border-gray-300 px-4 py-2">{details.success_ratio}%</td>
                          </tr>
                        ) : null
                      )}
                    </tbody>
                  </table>
                  <h4 className="font-medium text-gray-800 mt-4">Summary</h4>
                  <p className="text-gray-700">
                    Total Parcels: <strong>{responseData.courierData.summary.total_parcel}</strong>, 
                    Successful: <strong>{responseData.courierData.summary.success_parcel}</strong>, 
                    Cancelled: <strong>{responseData.courierData.summary.cancelled_parcel}</strong>, 
                    Success Ratio: <strong>{responseData.courierData.summary.success_ratio}%</strong>
                  </p>
                </div>
              )}

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CourierCheck;
