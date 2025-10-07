import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center pt-24 px-6">

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 mb-12 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have a question or want to collaborate? Connect with us directly via WhatsApp, Email, or social media — we’re always happy to help!
      </motion.p>

      {/* Contact Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all"
        >
          <FaWhatsapp size={24} /> Chat on WhatsApp
        </a>
        <a
          href="mailto:shahid@6dot.com"
          className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-all"
        >
          <FaEnvelope size={24} /> Send Email
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex space-x-8 text-gray-800"
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
      </motion.div>

      {/* Footer Note */}
      <p className="text-gray-500 text-sm mt-10 pb-6 tracking-wide text-center">
        © {new Date().getFullYear()} <span className="font-semibold text-black">6 Dot</span> — Crafted by <span className="text-black">Shahid Majeed</span>
      </p>
    </div>
  );
}
