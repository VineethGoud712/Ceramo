const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-8">

      {/* Top */}
      <div className="max-w-md">

        {/* Brand */}
        <h2 className="text-white text-lg  font-semibold tracking-wide select-none">
          Coffeemug
        </h2>

        {/* Tagline */}
        <p className="text-[#727272] font-satoshi text-sm mt-3 leading-relaxed">
          Designed for the moments that matter. Crafted to make every sip feel just right.
        </p>

        {/* Links */}
        <div className="mt-8 space-y-2 font-satoshi text-sm">
          <p className="text-white">Home</p>
          <p className="text-white">About</p>
          <p className="text-white">Contact</p>
          <p className="text-white">Privacy Policy</p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-8"></div>

      {/* Bottom */}
      <div className="flex justify-between items-center text-xs font-satoshi text-[#727272] max-w-md">
        <p>© 2026 Coffeemug</p>
        <p>All rights reserved</p>
      </div>

    </footer>
  );
};

export default Footer;