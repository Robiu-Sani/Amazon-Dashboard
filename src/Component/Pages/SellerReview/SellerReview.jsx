import AddReview from "./AddReview";
import AllReview from "./AllReview";

export default function SellerReview() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between  items-center">
        <h3 className="font-semibold text-xl">Seller Review</h3>
        <span className="px-7 bg-white font-semibold shadow-md cursor-pointer p-2 border rounded-md">
          {new Date().toLocaleDateString()}
        </span>
      </div>
      <AddReview />
      <AllReview />
    </div>
  );
}
