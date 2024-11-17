import React, { useState } from 'react';
import { motion } from "framer-motion";
const ProductRequest = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
    <div className="bg-white shadow-md rounded-lg p-4 w-96 border border-purple-400">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">
          Product Rq. List:
        </h2>
        <button
          onClick={toggleForm}
          className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="border border-purple-400 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Image</label>
            <input
              type="file"
              className="border border-purple-400 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Save
          </button>
        </motion.div>
      )}

      {!showForm && (
        <div className="text-center text-gray-500 mt-4">No Records Found!</div>
      )}
    </div>
  </div>
  );
}

export default ProductRequest;
