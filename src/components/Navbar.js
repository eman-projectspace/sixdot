import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Hamburger Icon (Small Screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="focus:outline-none">
            <HiMenu size={28} />
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 font-medium uppercase tracking-wide">
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
                className="text-gray-600 hover:text-black bg-white hover:bg-white transition-all duration-300 px-3 py-1 rounded-full"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right-Side Mobile Menu with Overlay */}
      {isOpen && (
        <>
          {/* Semi-transparent Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }} // start off-screen on the left
            animate={{ x: 0 }}      // slide to position
            exit={{ x: "-100%" }}    // exit back to left
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-64 h-full bg-black text-white shadow-lg z-50 flex flex-col"
          >
            {/* Close Icon */}
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <HiX size={28} className="text-white" />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col space-y-6 px-6 mt-10 font-medium uppercase">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-yellow-300 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </>
      )}
    </nav>
  );
}
