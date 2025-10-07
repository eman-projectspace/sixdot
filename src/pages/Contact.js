import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 flex flex-col items-center justify-center pt-24 px-6">

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 mb-10 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have a question or want to collaborate? We’d love to hear from you!
        Let’s create something amazing together.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 text-sm uppercase tracking-wide">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-black transition-all"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 text-sm uppercase tracking-wide">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-black transition-all"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 text-sm uppercase tracking-wide">Message</label>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-black transition-all"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex space-x-8 mt-10 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all">
          <FaFacebookF size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-all">
          <FaWhatsapp size={24} />
        </a>
      </motion.div>

      {/* Footer Note */}
      <p className="text-gray-500 text-sm mt-10 pb-6 tracking-wide">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800">6 Dot</span> — Crafted by <span className="text-gray-800">Shahid Majeed</span>
      </p>
    </div>
  );
}
