import handleImage from "/images/handle.png"; // your image

const HandleSection = () => {
  return (
    <section className="bg-black text-white py-16 mt-0 pt-2 mb-2 pb-0">

      {/* Image */}
      <div className="w-full">
        <img
          src={handleImage}
          alt="Mug handle"
          className="w-full h-[260px] object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="px-6 mt-5 max-w-md">

        <h2 className="text-[34px] font-satoshi font-light  leading-tight">
          COMFORT IN EVERY
          <br />
          HOLD
        </h2>

        <p className="text-gray-300 font-satoshi mt-3 text-[15px] leading-relaxed">
          A carefully shaped ceramic handle that fits comfortably in your hand,
          providing balance, stability, and a natural grip for every moment.
        </p>

      </div>
    </section>
  );
};

export default HandleSection;