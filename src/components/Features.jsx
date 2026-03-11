import { motion } from "framer-motion";
import { Hand, Flame, Palette, Coffee } from "lucide-react";

export default function Features() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-6 mt-8"
    >
      <h2 className="text-2xl font-semibold">Why it feels different</h2>

      <p className="text-muted mt-2">
        Thoughtfully designed to elevate your daily coffee ritual.
      </p>

      <div className="mt-6 space-y-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-5 rounded-2xl shadow-premium flex gap-4 items-start"
        >
          <div className="bg-[#F3ECE6] p-3 rounded-xl">
            <Hand className="w-6 h-6 text-[#8B5E3C]" />
          </div>

          <div>
            <h3 className="font-semibold">Handcrafted by artisans</h3>
            <p className="text-muted text-sm mt-1">
              Each mug is individually shaped and finished by skilled ceramic
              artisans, making every piece subtly unique.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-5 rounded-2xl shadow-premium flex gap-4 items-start"
        >
          <div className="bg-[#F3ECE6] p-3 rounded-xl">
            <Flame className="w-6 h-6 text-[#8B5E3C]" />
          </div>

          <div>
            <h3 className="font-semibold">Superior heat retention</h3>
            <p className="text-muted text-sm mt-1">
              Thick ceramic walls help keep your coffee warmer for longer
              without burning your hands.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-5 rounded-2xl shadow-premium flex gap-4 items-start"
        >
          <div className="bg-[#F3ECE6] p-3 rounded-xl">
            <Palette className="w-6 h-6 text-[#8B5E3C]" />
          </div>

          <div>
            <h3 className="font-semibold">Unique glaze finish</h3>
            <p className="text-muted text-sm mt-1">
              A hand-applied speckled glaze creates natural variations that make
              each mug one of a kind.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-5 rounded-2xl shadow-premium flex gap-4 items-start"
        >
          <div className="bg-[#F3ECE6] p-3 rounded-xl">
            <Coffee className="w-6 h-6 text-[#8B5E3C]" />
          </div>

          <div>
            <h3 className="font-semibold">Comfortable grip</h3>
            <p className="text-muted text-sm mt-1">
              The ergonomic handle is designed for a balanced, comfortable hold
              during slow mornings.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
