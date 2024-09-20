"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "Spring Boot",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section className="py-10 p-2 md:py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-gray-800">
        My Superpower Stack ⚡️
      </h2>
      <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-600">
        Here&apos;s the tech toolkit I&apos;ve been sharpening. These skills are
        my bread and butter—ready to tackle any project!
      </p>
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Badge className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
