const IncomeWallet = () => {
  const inflowItems = [
    "Team Commission",
    "Sells Profit",
    "Layer Base Commission",
    "Incentive",
    "Adjustment Add",
  ];

  const expenseItems = ["Withdraw", "Delivery Cost", "Adjustment Subtract"];

  return (
    <div className="w-full mx-auto mb-3 shadow-md p-5 border rounded-md bg-gray-50">
      <h1 className="text-2xl font-bold mb-5 text-center">Income Wallet</h1>

      {/* Balance Inflow Section */}
      <div className="border rounded-md mb-5">
        <div className="bg-blue-100 p-2 text-lg font-bold border-b text-center">
          Balance Inflow
        </div>
        <table className="w-full text-left border-collapse">
          <tbody>
            {inflowItems.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-0 hover:bg-gray-100"
              >
                <td className="p-2">{item}</td>
                <td className="p-2 text-right">0.00</td>
                <td className="p-2 text-right">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Details
                  </button>
                </td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="p-2">Total Income</td>
              <td className="p-2 text-right">0.00</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Balance Expense Section */}
      <div className="border rounded-md mb-5">
        <div className="bg-blue-100 p-2 text-lg font-bold border-b text-center">
          Balance Expense
        </div>
        <table className="w-full text-left border-collapse">
          <tbody>
            {expenseItems.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-0 hover:bg-gray-100"
              >
                <td className="p-2">{item}</td>
                <td className="p-2 text-right">0.00</td>
                <td className="p-2 text-right">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Details
                  </button>
                </td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="p-2">Total Expense</td>
              <td className="p-2 text-right">0.00</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Current Balance Section */}
      <div className="border rounded-md">
        <div className="bg-blue-100 p-2 text-lg font-bold border-b text-center">
          Current Balance
        </div>
        <div className="p-2 text-right font-bold text-xl">
          Your Current Balance: 0.00
        </div>
      </div>
    </div>
  );
};

export default IncomeWallet;
