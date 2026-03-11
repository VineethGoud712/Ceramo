import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="px-4 pt-4">
      <h2 className="text-2xl font-semibold">Handcrafted Ceramic Mug</h2>

      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm font-medium">4.6</span>

        <div className="text-yellow-500 text-sm">★★★★★</div>

        <span className="text-gray-500 text-sm">(151 reviews)</span>
      </div>

      <p className="text-sm text-gray-600 mt-1">
        <b>600+ </b>bought in past month
      </p>

      <div className="mt-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-clay/40 to-orange-200 blur-3xl"></div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/images/product2.png"
          className="rounded-2xl shadow-premium relative w-full"
        />
      </div>

      <p className="text-muted mt-4 text-md">
        A handcrafted ceramic mug designed to make your daily coffee ritual feel
        intentional.
      </p>
    </div>
  );
}
