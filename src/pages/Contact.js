import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1a17] to-[#3b2f2f] text-white flex flex-col items-center justify-center pt-24 px-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-[#d2b48c] mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-300 mb-10 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have a question or want to collaborate? We'd love to hear from you.
        Whether it’s about our products or partnership opportunities — we’re here to help.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-md bg-[#2b2320] p-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-[#1f1a17] text-white border border-[#5c4438] focus:outline-none focus:border-[#d2b48c]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-[#1f1a17] text-white border border-[#5c4438] focus:outline-none focus:border-[#d2b48c]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-[#1f1a17] text-white border border-[#5c4438] focus:outline-none focus:border-[#d2b48c]"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#a37c49] text-white font-semibold py-3 rounded-md hover:bg-[#d2b48c] transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex space-x-6 mt-10 text-[#d2b48c]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaFacebookF size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaWhatsapp size={24} />
        </a>
      </motion.div>

      {/* Footer Credit */}
      <p className="text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} 6 Dot | Designed by Shahid Majeed
      </p>
    </div>
  );
}
