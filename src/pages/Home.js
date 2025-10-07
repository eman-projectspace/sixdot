import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/heels.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Step Into Style 👟
        </motion.h1>

        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Discover modern, comfortable, and stylish footwear by{" "}
          <span className="font-semibold text-[#d2b48c]">6 Dot</span>.
        </motion.p>

        <motion.a
          href="/heels.jpg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#a37c49] text-white px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
}
