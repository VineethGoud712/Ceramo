import { useState } from "react";

import redCup from "/images/redcup.png";
import greenCup from "/images/green.png";
import blueCup from "/images/blue.png";
import lightpink from "/images/lightpink.png";

const cups = [
  {
    color: "#d11a2a",
    cloud: "https://res.cloudinary.com/dvnpzpoi6/image/upload/v1773762961/redcup_nxdpp2.png",
    local: redCup,
  },
  {
    color: "#065F46",
    cloud: "https://res.cloudinary.com/dvnpzpoi6/image/upload/v1773762958/green_ajargj.png",
    local: greenCup,
  },
  {
    color: "#1E3A8A",
    cloud: "https://res.cloudinary.com/dvnpzpoi6/image/upload/v1773762957/blue_ifwpqh.png",
    local: blueCup,
  },
  {
    color: "#C7A98B",
    cloud: "https://res.cloudinary.com/dvnpzpoi6/image/upload/v1773762958/lightpink_ns172w.png", // FIXED
    local: lightpink,
  },
];

const CupSelector = () => {
  const [selected, setSelected] = useState(0);
  const [fade, setFade] = useState(false);

  const handleChange = (i) => {
    if (i === selected) return;

    setFade(true);
    setTimeout(() => {
      setSelected(i);
      setFade(false);
    }, 150); // smoother
  };

  return (
    <section className="bg-black text-white flex flex-col items-center px-6 py-6 pb-6">
      
      <div className="w-full max-w-md mb-2">
        <h2 className="font-times italic text-3xl">
          Choose Your Sipping Cup
        </h2>
        <p className="mt-2 font-times italic text-sm text-white/70 leading-relaxed">
          Not just a cup — a feeling in your hands.
        </p>
      </div>

      <div className="w-full max-w-md flex justify-center">
        <img
          src={cups[selected].cloud || cups[selected].local}
          alt="Cup"
          className={`w-[300px] h-[320px] object-contain transition-all duration-500 ${
            fade
              ? "opacity-0 scale-95"
              : "opacity-100 scale-100"
          }`}
        />
      </div>

      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-full mt-2">
        {cups.map((cup, i) => (
          <button
            key={i}
            onClick={() => handleChange(i)}
            className={`w-5 h-5 rounded-full transition-all duration-300 ${
              selected === i
                ? "ring-2 ring-white scale-125 shadow-lg"
                : "opacity-60 hover:scale-110"
            }`}
            style={{ backgroundColor: cup.color }}
          />
        ))}
      </div>
    </section>
  );
};

export default CupSelector;