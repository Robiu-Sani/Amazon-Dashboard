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
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error(err.message);
      setError("Something went wrong. Please try again."); // Set error message
      setResponseData(null); // Clear previous data on error
    }
  };

  return (
    <div className="flex  justify-center  bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
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
            <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-md">
              <h3 className="font-semibold">Response:</h3>
              <pre className="mt-2 text-sm text-gray-700 overflow-auto">
                {JSON.stringify(responseData, null, 2)}
              </pre>
            </div>
          )}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CourierCheck;
