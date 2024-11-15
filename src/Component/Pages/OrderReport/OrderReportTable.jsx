const OrderReportTable = () => {
  const orders = [
    {
      id: 1,
      orderNumber: "SHP45864",
      customerName: "সিদ্ধি",
      orderDate: "31-Oct-2024 06:59 pm",
      quantity: 1,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS311024XYM7UB",
    },
    {
      id: 2,
      orderNumber: "SHP45799",
      customerName: "রাজকন্যা",
      orderDate: "30-Oct-2024 07:48 pm",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "65H8B83D3",
    },
    {
      id: 3,
      orderNumber: "SHP45791",
      customerName: "Ripon",
      orderDate: "29-Oct-2024 04:22 pm",
      quantity: 1,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS310024CN5KJ9",
    },
    {
      id: 4,
      orderNumber: "SHP45591",
      customerName: "Hasibul",
      orderDate: "27-Oct-2024 06:18 pm",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "64DF6C6A",
    },
    {
      id: 5,
      orderNumber: "SHP45592",
      customerName: "প্রিয়া সানি",
      orderDate: "26-Oct-2024 08:57 pm",
      quantity: 1,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS261024ZB3XR",
    },
    {
      id: 6,
      orderNumber: "SHP45586",
      customerName: "Ripon",
      orderDate: "26-Oct-2024 07:39 pm",
      quantity: 1,
      status: "Returned",
      courier: "pathao",
      trackingId: "DS261024PYT3Y",
    },
    {
      id: 7,
      orderNumber: "SHP45500",
      customerName: "রবিন",
      orderDate: "25-Oct-2024 10:24 pm",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "D47ED5AD",
    },
    {
      id: 8,
      orderNumber: "SHP45186",
      customerName: "আসিফ",
      orderDate: "22-Oct-2024 07:08 pm",
      quantity: 2,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS210024YWFSD",
    },
    {
      id: 9,
      orderNumber: "SHP39915",
      customerName: "Taniya",
      orderDate: "06-Jul-2024 01:37 am",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "5637CC08",
    },
    {
      id: 1,
      orderNumber: "SHP45864",
      customerName: "সিদ্ধি",
      orderDate: "31-Oct-2024 06:59 pm",
      quantity: 1,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS311024XYM7UB",
    },
    {
      id: 2,
      orderNumber: "SHP45799",
      customerName: "রাজকন্যা",
      orderDate: "30-Oct-2024 07:48 pm",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "65H8B83D3",
    },
    {
      id: 3,
      orderNumber: "SHP45791",
      customerName: "Ripon",
      orderDate: "29-Oct-2024 04:22 pm",
      quantity: 1,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS310024CN5KJ9",
    },
    {
      id: 4,
      orderNumber: "SHP45591",
      customerName: "Hasibul",
      orderDate: "27-Oct-2024 06:18 pm",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "64DF6C6A",
    },
    {
      id: 5,
      orderNumber: "SHP45592",
      customerName: "প্রিয়া সানি",
      orderDate: "26-Oct-2024 08:57 pm",
      quantity: 1,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS261024ZB3XR",
    },
    {
      id: 6,
      orderNumber: "SHP45586",
      customerName: "Ripon",
      orderDate: "26-Oct-2024 07:39 pm",
      quantity: 1,
      status: "Returned",
      courier: "pathao",
      trackingId: "DS261024PYT3Y",
    },
    {
      id: 7,
      orderNumber: "SHP45500",
      customerName: "রবিন",
      orderDate: "25-Oct-2024 10:24 pm",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "D47ED5AD",
    },
    {
      id: 8,
      orderNumber: "SHP45186",
      customerName: "আসিফ",
      orderDate: "22-Oct-2024 07:08 pm",
      quantity: 2,
      status: "Delivered",
      courier: "pathao",
      trackingId: "DS210024YWFSD",
    },
    {
      id: 9,
      orderNumber: "SHP39915",
      customerName: "Taniya",
      orderDate: "06-Jul-2024 01:37 am",
      quantity: 1,
      status: "Delivered",
      courier: "Stead Fast Courier",
      trackingId: "5637CC08",
    },
  ];

  return (
    <div className="p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Order Number</th>
              <th className="px-4 py-2 border">Customer Name</th>
              <th className="px-4 py-2 border">Order Date</th>
              <th className="px-4 py-2 border">Qty.</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Courier Name</th>
              <th className="px-4 py-2 border">Tracking Id</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="text-center border-t">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{order.orderNumber}</td>
                <td className="px-4 py-2 border">{order.customerName}</td>
                <td className="px-4 py-2 border">{order.orderDate}</td>
                <td className="px-4 py-2 border">{order.quantity}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "Returned"
                        ? "bg-red-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2 border">{order.courier}</td>
                <td className="px-4 py-2 border">
                  <div className="flex justify-center items-center gap-2">
                    <span>{order.trackingId}</span>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                      Copy
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex justify-center items-center gap-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                      View
                    </button>
                    <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                      Download
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderReportTable;
