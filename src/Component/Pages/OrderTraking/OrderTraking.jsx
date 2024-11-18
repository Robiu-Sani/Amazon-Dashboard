import { useState } from "react";

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState(null);

  const fetchOrderStatus = async () => {
    try {
      console.log("Fetching order status...");
      setOrderStatus(null);
      setError(null);

      const isPathao = trackingId.startsWith("PH");
      const apiUrl = isPathao
        ? "https://hermes-api.p-stageenv.xyz"
        : "https://steadfast.com/api/v1/orders/track";

      const credentials = isPathao
        ? {
            clientId: "QBeXLnoeyK",
            clientSecret: "imn7G1HWztCbWFCZSI7NAn6pukXqEqcfhjn64Abo",
          }
        : {
            apiKey: "1xmrzg0kqp4s4b5n4qm4f3n5rxqzkxvw",
            secretKey: "ztyedvojgis4i3vbosxtcigx",
          };

      const body = isPathao
        ? { tracking_id: trackingId }
        : { order_id: trackingId };

      console.log("API URL:", apiUrl);
      console.log("Request Body:", body);

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
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error("Tracking information not found!");
      }

      const data = await response.json();
      console.log("API Response:", data);
      setOrderStatus(data);
    } catch (err) {
      console.error("Error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="w-full  mx-auto p-4 bg-white shadow rounded">
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
        className="bg-gray-600 text-white px-4 py-2 rounded w-full hover:bg-gray-700"
      >
        Track Order
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {orderStatus && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold text-lg">Order Status:</h2>
          <pre className="text-sm mt-2">
            {JSON.stringify(orderStatus, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
