
import React from "react";

const SellerReview = () => {
  const reviews = [
    {
      productName: "Smartphone X",
      customerName: "John Doe",
      rating: 4.5,
      reviewText: "Great product! Very satisfied with the performance.",
      date: "2024-11-15",
    },
    {
      productName: "Laptop Pro",
      customerName: "Jane Smith",
      rating: 4,
      reviewText: "Good quality, but battery life could be better.",
      date: "2024-11-14",
    },
    {
      productName: "Wireless Headphones",
      customerName: "Michael Scott",
      rating: 5,
      reviewText: "Amazing sound quality and comfortable fit!",
      date: "2024-11-12",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Seller Reviews
        </h2>

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-purple-100">
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Rating</th>
              <th className="py-2 px-4 border-b">Review</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{review.productName}</td>
                  <td className="py-2 px-4 border-b">{review.customerName}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {review.rating} ⭐
                  </td>
                  <td className="py-2 px-4 border-b">{review.reviewText}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {review.date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No reviews found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerReview;
