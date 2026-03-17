import { useState } from "react";

import redCup from "/images/redcup.png";
import greenCup from "/images/green.png";
import blueCup from "/images/blue.png";
import lightpink from "/images/lightpink.png";

const cups = [
  { color: "#d11a2a", image: redCup },
  { color: "#065F46", image: greenCup },
  { color: "#1E3A8A", image: blueCup },
  { color: "#C7A98B", image: lightpink },
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
    }, 100);
  };

  return (
    <section className="bg-black text-white flex flex-col items-center px-6 py-6 pb-6">
      <div className="w-full max-w-md mb-0">
        <h2 className="font-times italic  text-3xl">Choose Your Sipping Cup</h2>
        <p className="mt-2 font-times italic text-sm text-white/70 leading-relaxed">
          Not just a cup — a feeling in your hands.
        </p>
      </div>

      <div className="w-full max-w-md flex justify-center">
        <img
          src={cups[selected].image}
          alt="Cup"
          className={`w-[300px] h-[320px] object-contain transition-all duration-300 ${
            fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
      </div>

      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-full mt-0">
        {cups.map((cup, i) => (
          <button
            key={i}
            onClick={() => handleChange(i)}
            className={`w-5 h-5 rounded-full transition-all duration-300 ${
              selected === i
                ? "ring-2 ring-white scale-110"
                : "opacity-60 hover:scale-105"
            }`}
            style={{ backgroundColor: cup.color }}
          />
        ))}
      </div>
    </section>
  );
};

export default CupSelector;
