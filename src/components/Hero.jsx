import cupImage from "/images/cupimage.png";

const Hero = () => {
  return (
    <section className="bg-black text-white flex flex-col px-6 pt-3 pb-5 mb-0">

      {/* Text */}
      <div className="w-full max-w-md">
        <p className="text-[#727272] text-[30px] font-satoshi leading-tight tracking-wide">
         CRAFTED FOR THE HANDS THAT HOLD IT.
        </p>

        <h1 className="text-[38px] font-times  text-white mt-2 leading-tight">
          THE MOMENT IN
          <br />
          EVERY SIP
        </h1>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-300 text-sm">Latest One</span>
          <span className="w-2 h-2 bg-green-500 rounded-full mt-1"></span>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-0 pt-0  items-center ">
        <img
          src={cupImage}
          alt="Coffee mug"
          className="w-[300px] object-contain"
        />
      </div>

      {/* CTA */}
      <div className="w-full max-w-md mt-10">
        <button className="w-full font-times border border-gray-400 py-4 text-lg hover:bg-white hover:text-black transition">
          Start Sipping Now
        </button>
      </div>

    </section>
  );
};

export default Hero;