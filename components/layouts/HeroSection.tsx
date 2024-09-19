"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

export default function HeroSection() {
  // Fungsi untuk menghasilkan angka random
  const randomMovement = () => Math.floor(Math.random() * 800 - 400); // Random range between -400 and 400

  return (
    <section className="relative py-16 text-gray-800 bg-transparent overflow-hidden">
      {/* Background animated blob 1 */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full opacity-50"
        initial={{ x: -200, y: -100, scale: 0.8 }}
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

      {/* Background animated blob 2 */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-50"
        initial={{ x: 200, y: 100, scale: 0.8 }}
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

      <div className="relative max-w-2xl mx-auto text-center z-10">
        {/* Animasi Fade-in dan Zoom-in untuk gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/path-to-your-photo.jpg" // Ganti dengan path foto kamu
            alt="Your Name"
            width={150}
            height={150}
            className="mx-auto rounded-full mb-4"
          />
        </motion.div>

        {/* Animasi untuk teks (fade-in dan slide-up) */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I&apos;m Ardian
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg mb-6"
        >
          I am a Fullstack Developer skilled in Next.js, React, and more!
        </motion.p>

        {/* Animasi untuk tombol (slide-up dengan delay) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button className="bg-white border border-gray-700 text-gray-700 font-bold hover:bg-black hover:text-white py-3 px-6 rounded-lg transition-all duration-300">
            Download CV
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
