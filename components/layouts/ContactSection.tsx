"use client";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="p-4 md:py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading with slight animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800"
        >
          Let&apos;s Connect!
        </motion.h2>

        {/* Subheading with delay animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-6 text-gray-700"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </motion.p>

        {/* Buttons with animation and shadows */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/ardian-brian-9305a1245/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-xl transition-transform transform hover:scale-105 duration-300"
            whileHover={{ scale: 1.05 }} // Animation on hover
          >
            <FaLinkedin className="mr-2" /> Connect on LinkedIn
          </motion.a>
          <motion.a
            href="mailto:ardianbrianpratama@gmail.com"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white py-3 px-8 rounded-full shadow-xl transition-transform transform hover:scale-105 duration-300"
            whileHover={{ scale: 1.05 }} // Animation on hover
          >
            <FaEnvelope className="mr-2" /> Send an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
