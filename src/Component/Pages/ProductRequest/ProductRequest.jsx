import { useState } from "react";
import { motion } from "framer-motion";
import ImageUpload from "../../Shaire/ImageUpload"; // Ensure this component exists and handles image uploads
import { IoCloudUploadOutline } from "react-icons/io5";

const ProductRequest = () => {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null); // Single image state
  const [formData, setFormData] = useState({ productName: "" });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      // Clear form and errors when the form opens
      setFormData({ productName: "" });
      setImage(null);
      setErrors({});
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (url) => {
    setImage(url); // Set the uploaded image URL
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.productName) {
      newErrors.productName = "Product name is required.";
      valid = false;
    }

    if (!image) {
      newErrors.productImage = "Product image is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Data:", { ...formData, productImage: image });
      // Add your submit logic here
      toggleForm();
    }
  };

  return (
    <div className=" flex justify-center items-start">
      <div className="bg-white shadow-md rounded-lg p-4 w-96 border border-gray-400">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">Product Rq. List:</h2>
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
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="border  rounded-lg w-full p-2 focus:outline-none focus:ring focus:ring-gray-400"
              />
              {errors.productName && (
                <p className="text-red-500 text-sm">{errors.productName}</p>
              )}
            </div>

            <div className="mb-4">
              <div className="w-full flex flex-col gap-3">
                <label className="block text-sm text-gray-600 mb-2">
                  Image
                </label>
                <div className="w-full relative flex-col cursor-pointer h-auto min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded Preview"
                      className=" w-full h-auto min-h-[150px] rounded-md border"
                    />
                  ) : (
                    <div className="w-full max-h-[200px] min-h-[150px] flex flex-col justify-center items-center h-full">
                      <IoCloudUploadOutline className="text-2xl" />
                      <small>Upload Product Image</small>
                    </div>
                  )}
                  <ImageUpload onUpload={handleImageUpload} />
                </div>
                {errors.productImage && (
                  <p className="text-red-500 text-sm">{errors.productImage}</p>
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save
            </button>
          </motion.div>
        )}

        {!showForm && (
          <div className="text-center text-gray-500 mt-4">
            No Records Found!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductRequest;
