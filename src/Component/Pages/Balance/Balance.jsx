export default function Balance() {
  return <div className="p-6 bg-gray-50 min-h-screen">
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-semibold mb-4 text-purple-600">
      ব্যালেন্স স্টেটমেন্ট
    </h2>
    <div className="flex justify-between items-center mb-4">
      <div>
        <label className="block text-gray-600">Show</label>
        <select className="border border-gray-300 rounded-lg p-2">
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="25">25</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg p-2 w-60"
        />
      </div>
    </div>
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-purple-100">
          <th className="py-2 px-4 border-b">তারিখ</th>
          <th className="py-2 px-4 border-b">ট্রানজেকশন_ডিটেইলস</th>
          <th className="py-2 px-4 border-b">টাকা</th>
          <th className="py-2 px-4 border-b">ব্যালেন্স</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            colSpan="4"
            className="text-center text-gray-500 py-4 border-b"
          >
            No data available in table
          </td>
        </tr>
      </tbody>
    </table>
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm text-gray-600">
        Showing 0 to 0 of 0 entries
      </span>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">
          Previous
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">
          Next
        </button>
      </div>
    </div>
  </div>
</div>;
}
