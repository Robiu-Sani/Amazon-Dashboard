

import React, { useState } from "react";

const OrderTraking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState(null);

  // Handle the API Call
  const fetchOrderStatus = async () => {
    try {
      // Clear previous data
      setOrderStatus(null);
      setError(null);

      // Determine API endpoint and credentials
      const isPathao = trackingId.startsWith("PH"); // Example logic
      const apiUrl = isPathao
        ? "https://hermes-api.p-stageenv.xyz" // Replace with actual Pathao endpoint
        : "https://steadfast.com/api/v1/orders/track"; // Replace with actual SteadFast endpoint

      const credentials = isPathao
        ? {
            clientId: "YQdJy7vbOG",
            clientSecret: "A2JKENivHUYjKewYtZ8cuaOIhhchMuKwjxLyDjHX",
          }
        : {
            apiKey: "1hrdbfzrj7ximsdvgnaa0umnkovycvpf",
            secretKey: "khgbgvwlzvnzuet27rsz9eao",
          };

      // API request body
      const body = isPathao
        ? { tracking_id: trackingId }
        : { order_id: trackingId };

      // API Call
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(isPathao
            ? {
                Authorization: `Basic ${btoa(
                  `${credentials.clientId}:${credentials.clientSecret}`
                )}`,
              }
            : {
                "Api-Key": credentials.apiKey,
                "Secret-Key": credentials.secretKey,
              }),
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Tracking information not found!");
      }

      const data = await response.json();
      setOrderStatus(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Order Tracking</h1>
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4"
      />
      <button
        onClick={fetchOrderStatus}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
      >
        Track Order
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {orderStatus && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold text-lg">Order Status:</h2>
          <pre className="text-sm mt-2">{JSON.stringify(orderStatus, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default OrderTraking;
