import { useState } from "react";

export default function VariantSelector() {
  const [size, setSize] = useState("medium");

  const prices = {
    small: 18,
    medium: 24,
    large: 32,
  };

  return (
    <div className="px-6 mt-6">
      <h2 className="text-xl">Choose your size</h2>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {Object.keys(prices).map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`py-3 rounded-xl border transition

${size === s ? "bg-clay text-white border-clay" : "bg-white"}

`}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="text-3xl mt-6">${prices[size]}</p>
    </div>
  );
}
