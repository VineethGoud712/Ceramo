const reviews = [
  {
    name: "Aarav Mehta",
    text: "The weight, the warmth, the feel — everything about this mug feels intentional. Easily my favorite part of the morning.",
    rating: 5,
  },
  {
    name: "Sofia Carter",
    text: "You don’t realize how much a good mug matters until you use this. It just feels right in your hand.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    text: "Simple, elegant, and keeps my coffee warm longer than expected. Exactly what I was looking for.",
    rating: 4.9,
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-black text-white px-6 py-1 mt-2">

      {/* Heading */}
      <div className="mb-8 max-w-md">
        <p className="text-[#727272] text-xl tracking-wide">
          WHAT PEOPLE SAY
        </p>

        <h2 className="text-3xl italic mt-2">
          Crafted for everyday moments
        </h2>

        {/* Overall Rating */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xl font-semibold">4.9</span>
          <span className="text-lg text-[#D4AF37]">★★★★★</span>
          <span className="text-gray-400 text-sm">(120k reviews)</span>
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6 max-w-md">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="border border-white/10 p-5 rounded-sm"
          >
            {/* Stars */}
            <div className="text-[#D4AF37] mb-3">
              {"★".repeat(Math.round(review.rating))}
            </div>

            {/* Text */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {review.text}
            </p>

            {/* Name */}
            <p className="mt-4 text-white text-sm font-medium">
              — {review.name}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ReviewSection;