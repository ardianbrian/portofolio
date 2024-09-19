"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description:
        "A brief description of Project 1, highlighting its purpose and the technologies used.",
      link: "#",
    },
    {
      title: "Project 2",
      description:
        "A brief description of Project 2, showcasing its impact and functionality.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">Projects</h2>
        <p className="text-lg text-gray-600 mt-4">
          Here are some of the projects I&apos;ve worked on, showcasing my
          skills in fullstack development. Check them out below!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="w-full"
          >
            <Card className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline font-semibold"
              >
                View Project
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
