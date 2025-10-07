import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/heels.jpg')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 uppercase"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Step Into <span className="text-white">Style</span>
        </motion.h1>

        <motion.p
          className="text-lg text-white mb-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
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
