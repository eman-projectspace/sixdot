import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1a17] to-[#3b2f2f] text-white flex items-center justify-center px-8 pt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/shoe.jpg"
            alt="About 6 Dot"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-[#d2b48c] mb-4">About 6 Dot</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Founded by <span className="text-[#d2b48c] font-semibold">Shahid Majeed</span>,
            6 Dot was built on a love for craftsmanship, comfort, and timeless
            design. Each shoe is more than just footwear — it’s a blend of art,
            durability, and modern aesthetics inspired by the textures of nature.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our mission is simple: to help you step with confidence — in style,
            quality, and comfort. Every pair reflects our passion for detail and
            the story of those who wear them.
          </p>
          <p className="text-sm text-gray-500 italic mt-6">
            — Shahid Majeed, Founder & Creative Director of 6 Dot
          </p>
        </motion.div>
      </div>
    </div>
  );
}
