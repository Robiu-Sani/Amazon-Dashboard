import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdStar } from "react-icons/md";

export default function AddReview() {
  const [rating, setRating] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log({
      ...data,
      rating,
      date: new Date().toDateString(),
    });
    reset();
    setRating(0);
  };

  return (
    <div className="w-full grid grid-cols-1 p-3 min-h-[200px] sm:grid-cols-3 bg-white rounded-md shadow-md">
      <div className="w-full h-full p-3 flex flex-col justify-center items-center border-r-0 sm:border-r sm:border-b-0 border-b">
        <h3 className="text-xl font-semibold text-gray-700 text-center">
          Total Seller Review
        </h3>
        <div className="flex justify-center items-center gap-3">
          <h1 className="font-bold text-[45px]">10.0k</h1>
          <span className="bg-green-200 rounded-md p-2 flex justify-center items-center">
            <MdStar className="text-2xl text-amber-500" />
          </span>
        </div>
        <small className="text-center text-gray-400">
          Share your experience and help others make informed decisions.
        </small>
      </div>

      <form
        className="w-full col-span-1 flex flex-col gap-5 justify-between sm:col-span-2 h-full p-4 sm:pr-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          {...register("review", { required: "Review is required" })}
          className="w-full h-[100px] rounded-md p-2 outline-0 border "
          placeholder="Write Your Opinion"
        ></textarea>

        <div className="w-full grid grid-cols-3 gap-3">
          <div className="w-full col-span-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <MdStar
                  key={star}
                  className={`text-3xl cursor-pointer ${
                    star <= rating ? "text-amber-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <small className="text-gray-500">
              Rating: {rating > 0 ? rating : "No rating given"}
            </small>
          </div>
          <div className="">
            <button
              type="submit"
              className="w-full text-center text-white font-semibold rounded-md bg-gray-600 p-2 hover:bg-gray-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
