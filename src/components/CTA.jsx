import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [added, setAdded] = useState(false);

  return (
    <div className="px-6 mt-8 pb-20">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setAdded(true)}
        className="w-full py-4 rounded-2xl
bg-ink text-white text-lg shadow-premium"
      >
        {added ? "Added ✓" : "Add to Cart"}
      </motion.button>

      <p className="text-center text-muted mt-3">
        Free shipping · 30 day returns
      </p>
    </div>
  );
}
