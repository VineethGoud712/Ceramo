import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-[#000000]  px-6 h-[52px]">
      
      <span className="text-white text-lg  font-semibold tracking-wide select-none">
        Coffeemug
      </span>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col justify-between w-[22px] h-[16px] bg-transparent border-none cursor-pointer p-0"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-full h-[2px] bg-white rounded transition-all duration-300 origin-center ${
            menuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-full h-[2px] bg-white rounded transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-full h-[2px] bg-white rounded transition-all duration-300 origin-center ${
            menuOpen ? "-translate-y-[7px] -rotate-45" : "rotate-0"
          }`}
        />
      </button>

      {menuOpen && (
        <div className="absolute top-full right-0 bg-[#000000]  border-t-0  min-w-[180px] z-50">
          {["Home", "Menu", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-6 py-3 text-[#ccccdd] text-sm hover:bg-[#6c63ff]/20 hover:text-white border-b border-[#6c63ff]/20 last:border-b-0"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;