import { useNavigate } from "react-router-dom";

export default function AllCategorys() {
  const navigate = useNavigate();

  const productCategories = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 3,
      name: "Home Appliances",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 4,
      name: "Books",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 5,
      name: "Toys",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 6,
      name: "Groceries",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 7,
      name: "Sports",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 8,
      name: "Beauty Products",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 9,
      name: "Furniture",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 10,
      name: "Automobiles",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 11,
      name: "Mobile Phones",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 12,
      name: "Stationery",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 13,
      name: "Fitness Equipment",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 14,
      name: "Kitchenware",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 15,
      name: "Watches",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 16,
      name: "Jewelry",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 17,
      name: "Musical Instruments",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 18,
      name: "Gaming",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 19,
      name: "Pet Supplies",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 20,
      name: "Gardening Tools",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 21,
      name: "Bags & Luggage",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 22,
      name: "Camera Accessories",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 23,
      name: "Health Products",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 24,
      name: "Travel Gear",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 25,
      name: "Lighting",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 26,
      name: "Baby Products",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 27,
      name: "Office Supplies",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 28,
      name: "Art & Craft",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 29,
      name: "Footwear",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 30,
      name: "Outdoor Gear",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 31,
      name: "Bicycles",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 32,
      name: "Audio Equipment",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 33,
      name: "Decor Items",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 34,
      name: "Ethnic Wear",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
    {
      id: 35,
      name: "DIY Tools",
      image:
        "https://ps.w.org/rdv-category-image/assets/icon-256x256.png?rev=2599260",
    },
  ];

  if (productCategories.length === 0) {
    return (
      <div className="w-full text-center mt-10">
        <p className="text-gray-500">No categories available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Navigation Buttons */}
      <div className="w-full bg-white p-2 rounded-md shadow-md flex justify-between items-center">
        <button
          onClick={() => navigate(`/dashboard`)}
          className="px-4 py-1 rounded-md bg-gray-700 text-white font-semibold hover:bg-gray-800"
          aria-label="Go to Dashboard"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate(`/category/allproduct`)}
          className="px-4 py-1 rounded-md bg-green-700 text-white font-semibold hover:bg-green-800"
          aria-label="View All Products"
        >
          All Product
        </button>
      </div>

      {/* Categories Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {productCategories.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(
                `/category/${item.name.replace(/\s+/g, "-").toLowerCase()}`
              )
            }
            className="w-full scroll-animation cursor-pointer p-3 flex  gap-2 justify-start items-center overflow-hidden rounded-md bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={
                item.image || "https://via.placeholder.com/150?text=No+Image"
              }
              alt={item.name || "Category"}
              className="w-14 h-14 rounded-md object-cover"
            />
            <span className="text-center font-medium text-gray-700">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
