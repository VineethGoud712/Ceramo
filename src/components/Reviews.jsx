const reviews = [
  {
    name: "Aarav Mehta",
    text: "The weight, the warmth, the feel — everything about this mug feels intentional. Easily my favorite part of the morning.",
  },
  {
    name: "Sofia Carter",
    text: "You don’t realize how much a good mug matters until you use this. It just feels right in your hand.",
  },
  {
    name: "Daniel Kim",
    text: "Simple, elegant, and keeps my coffee warm longer than expected. Exactly what I was looking for.",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-black text-white px-6 py-1">

      {/* Heading */}
      <div className="mb-10 max-w-md">
        <p className="text-[#727272] text-1xl font-satoshi tracking-wide">
          WHAT PEOPLE SAY
        </p>

        <h2 className="text-3xl font-times italic mt-2">
          Crafted for everyday moments
        </h2>
      </div>

      {/* Reviews */}
      <div className="space-y-6 max-w-md">

        {reviews.map((review, i) => (
          <div
            key={i}
            className="border border-white/10 p-5 rounded-sm"
          >
            {/* Stars */}
            <div className="text-white mb-3">
              ⭐⭐⭐⭐⭐
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