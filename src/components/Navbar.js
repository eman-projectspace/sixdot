import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#3b2f2f] to-[#1f1a17] shadow-lg z-50 border-b border-[#5c4438]/70">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <motion.h1
          className="text-2xl font-bold text-[#d2b48c] tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          6<span className="text-[#a37c49]">Dot</span>
        </motion.h1>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-[#d4c4b0] font-medium">
          {["Home", "Shop", "About", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#f5deb3" }}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-[#f5deb3] transition-colors duration-200"
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
