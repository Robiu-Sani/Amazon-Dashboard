import { FaDownload, FaCartPlus } from "react-icons/fa";

export default function ProductGrid() {
  const dummyProducts = [
    {
      id: 1,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১৮০",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "২০০",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "২৫০",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "৩০০",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১০০",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "স্টক আপডেট ডেট ০১-০১-২৪",
      price: "১৫০",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-center mb-6">পণ্য তালিকা</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-cover mb-3 rounded"
            />
            <h3 className="text-md font-medium text-gray-700 mb-2">
              {product.title}
            </h3>
            <p className="text-lg text-green-600 font-bold mb-3">
              প্রাইস: {product.price} টাকা
            </p>
            <div className="flex justify-between items-center">
              <button className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200">
                <FaDownload className="mr-2" /> ছবি
              </button>
              <button className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200">
                <FaCartPlus className="mr-2" /> ক্যাটালগ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
