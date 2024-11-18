import { MdStar, MdFavorite } from "react-icons/md";

export default function ReviewCard({ username, date, rating, reviewText }) {
  return (
    <div className="w-full grid  p-4 grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-md shadow-sm">
      {/* User Section */}
      <div className="w-full flex justify-start items-start">
        <div className="flex justify-start items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslo_yB3rndBOYg7aO7QmK7TdBIpDtbyzpqg&s"
            className="w-[50px] h-[50px] rounded-md object-cover border"
            alt="User"
          />
          <div className="w-full">
            <h3 className="font-bold text-gray-800">
              {username || "User Name"}
            </h3>
            <small className="text-gray-400">
              {date || new Date().toLocaleDateString()}
            </small>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="w-full col-span-1 sm:col-span-2">
        {/* Rating and Reaction */}
        <div className="w-full flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Rating:</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <MdStar
                  key={index}
                  className={`text-2xl ${
                    index < rating ? "text-amber-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <MdFavorite className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* Review Text */}
        <p className="text-gray-600 leading-relaxed">
          {reviewText ||
            "This is a placeholder review. Share your thoughts about the product or service. Your feedback helps others make informed decisions."}
        </p>
      </div>
    </div>
  );
}
