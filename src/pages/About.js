import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-8 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/shoe.jpg"
            alt="6 Dot Collection"
            className="rounded-2xl shadow-xl object-cover w-full h-80 md:h-96 border border-gray-200"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-wide">
            About <span className="text-gray-500">6 Dot</span>
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed text-lg">
            <span className="font-semibold text-black">6 Dot</span> is a brand
            founded by <span className="font-semibold text-black">Shahid Majeed</span>,
            driven by a passion for modern design and premium craftsmanship.
            Each pair represents a perfect blend of minimalism, comfort, and style.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Inspired by clean aesthetics and everyday motion, our shoes are
            crafted to empower confidence — combining luxury detail with effortless wearability.
          </p>
          <p className="text-sm text-gray-400 italic mt-6">
            — Shahid Majeed, Founder of 6 Dot
          </p>
        </motion.div>
      </div>
    </div>
  );
}
