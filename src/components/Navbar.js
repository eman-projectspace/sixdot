import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo / Brand */}
        <motion.h1
          className="text-2xl font-extrabold tracking-widest uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          6<span className="text-white/60">Dot</span>
        </motion.h1>

        {/* Nav Links */}
        <ul className="flex space-x-8 font-medium uppercase tracking-wide">
          {["Home", "Shop", "About", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-600  hover:text-black bg-white hover:bg-white transition-all duration-300 px-3 py-1 rounded-full"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
