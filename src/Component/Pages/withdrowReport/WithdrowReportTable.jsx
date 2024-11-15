export default function WithdrowReportTable() {
  const data = [
    {
      id: 1,
      requestDate: "24-Oct-2024 01:41 am",
      responseDate: "25-Oct-2024 03:11 pm",
      gateway: "bKash",
      txnID: "Lxsh-3380",
      accountNumber: "01756245910",
      requestAmount: "৳ 200.00",
      chargeAmount: "৳ 10.00",
      netBalance: "৳ 190.00",
      status: "Paid",
    },
    {
      id: 2,
      requestDate: "31-Oct-2024 11:22 pm",
      responseDate: "03-Nov-2024 08:51 pm",
      gateway: "bKash",
      txnID: "Lxsh-3380",
      accountNumber: "01756245910",
      requestAmount: "৳ 710.00",
      chargeAmount: "৳ 35.50",
      netBalance: "৳ 674.50",
      status: "Paid",
    },
    // Add 5 more dummy entries here
    {
      id: 3,
      requestDate: "02-Nov-2024 10:20 am",
      responseDate: "03-Nov-2024 01:10 pm",
      gateway: "Rocket",
      txnID: "Lxsh-3391",
      accountNumber: "01756245911",
      requestAmount: "৳ 500.00",
      chargeAmount: "৳ 20.00",
      netBalance: "৳ 480.00",
      status: "Paid",
    },
    {
      id: 4,
      requestDate: "05-Nov-2024 09:15 pm",
      responseDate: "06-Nov-2024 10:45 am",
      gateway: "Nagad",
      txnID: "Lxsh-3402",
      accountNumber: "01756245912",
      requestAmount: "৳ 1000.00",
      chargeAmount: "৳ 50.00",
      netBalance: "৳ 950.00",
      status: "Paid",
    },
    {
      id: 5,
      requestDate: "07-Nov-2024 04:05 pm",
      responseDate: "08-Nov-2024 08:30 pm",
      gateway: "bKash",
      txnID: "Lxsh-3413",
      accountNumber: "01756245913",
      requestAmount: "৳ 300.00",
      chargeAmount: "৳ 15.00",
      netBalance: "৳ 285.00",
      status: "Paid",
    },
    {
      id: 6,
      requestDate: "10-Nov-2024 06:30 pm",
      responseDate: "11-Nov-2024 09:00 am",
      gateway: "Rocket",
      txnID: "Lxsh-3424",
      accountNumber: "01756245914",
      requestAmount: "৳ 400.00",
      chargeAmount: "৳ 20.00",
      netBalance: "৳ 380.00",
      status: "Paid",
    },
    {
      id: 7,
      requestDate: "12-Nov-2024 03:50 am",
      responseDate: "13-Nov-2024 12:20 pm",
      gateway: "Nagad",
      txnID: "Lxsh-3435",
      accountNumber: "01756245915",
      requestAmount: "৳ 250.00",
      chargeAmount: "৳ 12.50",
      netBalance: "৳ 237.50",
      status: "Paid",
    },
  ];

  return (
    <div className=" bg-gray-100">
      <h2 className="font-semibold ">Withdraw Report</h2>
      <div className="overflow-x-auto bg-white border border-gray-300 rounded-lg">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">SL</th>
              <th className="py-2 px-4 border">Request Date</th>
              <th className="py-2 px-4 border">Response Date</th>
              <th className="py-2 px-4 border">Gateway</th>
              <th className="py-2 px-4 border">Txn ID</th>
              <th className="py-2 px-4 border">Account Number</th>
              <th className="py-2 px-4 border">Request Amount</th>
              <th className="py-2 px-4 border">Charge Amount</th>
              <th className="py-2 px-4 border">Net Balance</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4 border">{item.id}</td>
                <td className="py-2 px-4 border">{item.requestDate}</td>
                <td className="py-2 px-4 border">{item.responseDate}</td>
                <td className="py-2 px-4 border">{item.gateway}</td>
                <td className="py-2 px-4 border">{item.txnID}</td>
                <td className="py-2 px-4 border">{item.accountNumber}</td>
                <td className="py-2 px-4 border">{item.requestAmount}</td>
                <td className="py-2 px-4 border">{item.chargeAmount}</td>
                <td className="py-2 px-4 border">{item.netBalance}</td>
                <td className="py-2 px-4 border text-green-600 font-semibold">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-bold">
              <td colSpan="7" className="py-2 px-4 border text-right">
                Total
              </td>
              <td className="py-2 px-4 border">৳ 164.50</td>
              <td className="py-2 px-4 border">৳ 854.50</td>
              <td className="py-2 px-4 border"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
