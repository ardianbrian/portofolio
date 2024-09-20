"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const randomMovement = () => Math.floor(Math.random() * 600 - 300);

  return (
    <section className="relative py-16 lg:py-24 text-gray-800 bg-transparent overflow-hidden">
      {/* Glass effect background */}
      <div className="absolute inset-0 backdrop-blur-5xl bg-white/30 border border-white/20 rounded-lg z-0"></div>

      {/* Gradient animated blob 1 */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full opacity-60"
        initial={{ x: -300, y: -100, scale: 0.8 }}
        animate={{
          x: [randomMovement(), randomMovement(), randomMovement()],
          y: [randomMovement(), randomMovement(), randomMovement()],
          scale: [0.8, 1.2, 1, 1.3, 0.9],
          rotate: [0, 45, 90, 135, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>

      {/* Gradient animated blob 2 */}
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 rounded-full opacity-60"
        initial={{ x: 300, y: 100, scale: 0.8 }}
        animate={{
          x: [randomMovement(), randomMovement(), randomMovement()],
          y: [randomMovement(), randomMovement(), randomMovement()],
          scale: [0.8, 1.3, 1.1, 0.9, 1.2],
          rotate: [0, -45, -90, -135, -180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>

      {/* Gradient animated blob 3 */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-60"
        initial={{ x: 0, y: 100, scale: 0.8 }}
        animate={{
          x: [randomMovement(), randomMovement(), randomMovement()],
          y: [randomMovement(), randomMovement(), randomMovement()],
          scale: [0.8, 1.2, 1, 1.3, 0.9],
          rotate: [0, 45, 90, 135, 180],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>

      <div className="relative max-w-2xl mx-auto text-center z-10">
        {/* Animated Image with Fade-in and Zoom-in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/FotoArdian.jpg" // Replace with your photo path
            alt="Your Name"
            width={150}
            height={150}
            className="mx-auto rounded-full mb-4"
          />
        </motion.div>

        {/* Animated Text (Fade-in and Slide-up) */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Hi, I&apos;m Ardian
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base lg:text-lg mb-6"
        >
          I am a Fullstack Developer skilled in Next.js, React, and more!
        </motion.p>
      </div>
    </section>
  );
}
