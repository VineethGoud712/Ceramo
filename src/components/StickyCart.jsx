import { useState, useEffect } from "react";

export default function StickyCart() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => setShow(window.scrollY > 500);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[375px]">
      <div className="bg-white border-t shadow-premium px-4 py-3 flex justify-between">
        <p className="font-semibold">$24</p>

        <button className="bg-ink text-white px-5 py-2 rounded-xl">Buy</button>
      </div>
    </div>
  );
}
