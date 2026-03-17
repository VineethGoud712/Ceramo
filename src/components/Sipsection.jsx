import rimImage from "/images/sipimg.png"; // your image

const SipSection = () => {
  return (
    <section className="bg-black text-white py-16 pt-0">

      {/* Image */}
      <div className="w-full">
        <img
          src={rimImage}
          alt="Coffee rim"
          className="w-full h-[260px]"
        />
      </div>

      {/* Content */}
      <div className="px-6 mt-5 max-w-md">
        <h2 className="text-3xl font-satoshi font-light tracking-wide leading-tight">
          WHERE EVERY SIP
          <br />
          BEGINS
        </h2>

        <p className="font-satoshi text-gray-300 mt-3 text-[15px] leading-relaxed">
          A finely finished ceramic rim that meets your lips with warmth
          and comfort, designed to make every sip feel smooth, balanced,
          and effortless.
        </p>
      </div>

    </section>
  );
};

export default SipSection;