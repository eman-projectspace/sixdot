import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/heels.jpg')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>





      {/* Tilted Promo Ribbon (Left side) */}
      <motion.div
        className="absolute top-1/4 left-0 transform -rotate-12 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 font-bold uppercase tracking-wider shadow-2xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        30% Off Today!
      </motion.div>


      {/* Banner Content (Centered) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 uppercase mt-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Step Into <span className="text-yellow-300">Style</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light mb-10 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Discover modern, comfortable, and stylish footwear by{" "}
          <span className="font-semibold">6 Dot</span>.
        </motion.p>

        <motion.a
          href="/shop"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-black hover:text-white border border-white transition-all duration-300"
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
}
