"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "Spring Boot",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
  ];

  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    skills.forEach((skill, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleSkills((prev) => [...prev, skill]);
      }, index * 600);
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="py-20 bg-bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
        My Superpower Stack ⚡️
      </h2>
      <p className="mb-6 text-lg text-gray-600">
        Here’s the tech toolkit I’ve been sharpening. These skills are my bread
        and butter—ready to tackle any project!
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {visibleSkills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Badge className="px-8 py-4 text-lg rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
