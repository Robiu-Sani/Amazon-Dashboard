import ReviewCard from "./ReviewCard";

export default function AllReview() {
  const dummyReviews = [
    {
      username: "John Doe",
      date: "2024-11-18",
      rating: 5,
      reviewImage:
        "https://s3.amazonaws.com/libapps/accounts/1928/images/Review.jpg",
      reviewText:
        "Amazing product! Highly recommend to everyone. The quality exceeded my expectations, and the service was exceptional. Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging. Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.",
    },
    {
      username: "Jane Smith",
      date: "2024-11-17",
      rating: 4,
      reviewText:
        "Good quality, but shipping was delayed. Overall, a positive experience, but there's room for improvement in delivery time.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.",
    },
    {
      username: "Alex Johnson",
      date: "2024-11-16",
      rating: 3,
      reviewText:
        "Average experience, could be improved. The product was okay, but it didn't meet all my expectations.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.",
    },
    {
      username: "Maria Gonzalez",
      date: "2024-11-15",
      rating: 5,
      reviewImage:
        "https://s3.amazonaws.com/libapps/accounts/1928/images/Review.jpg",
      reviewText:
        "Absolutely loved it! Will purchase again. The design and quality are fantastic, and the price is fair.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.",
    },
    {
      username: "David Kim",
      date: "2024-11-14",
      rating: 4,
      reviewText:
        "Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.",
    },
    {
      username: "Emily Davis",
      date: "2024-11-13",
      reviewImage:
        "https://s3.amazonaws.com/libapps/accounts/1928/images/Review.jpg",
      rating: 2,
      reviewText:
        "Not what I expected. Quality could be better. I was disappointed by the lack of attention to detail.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.",
    },
    {
      username: "Chris Lee",
      date: "2024-11-12",
      rating: 5,
      reviewText:
        "Exceptional service and top-notch product quality! I’m incredibly happy with this purchase and highly recommend it.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.Great value for money. Satisfied with my purchase, although I noticed a small issue with the packaging.",
    },
  ];

  return (
    <div className="w-full p-3 bg-white rounded-md flex flex-col gap-3 shadow-md">
      {dummyReviews.map((review, index) => (
        <ReviewCard
          key={index}
          username={review.username}
          date={review.date}
          rating={review.rating}
          reviewText={review.reviewText}
          reviewImage={review?.reviewImage}
        />
      ))}
    </div>
  );
}
