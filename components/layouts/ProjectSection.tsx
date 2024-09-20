"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Inventory Application",
      description:
        "A web application designed to manage and monitor inventory stock. This application allows users to add, edit, and delete items, as well as view stock reports in real-time.",
    },
    {
      title: "Pet Shop Website",
      description:
        "A website that provides a platform for selling various pet products. Users can browse product categories, read descriptions, and make purchases easily.",
    },
    {
      title: "Simple E-Commerce Website",
      description:
        "A simple e-commerce website that allows users to browse products, add them to the cart, and make payments using a payment gateway. This project demonstrates payment system integration and a user-friendly experience.",
    },
  ];

  return (
    <section className="p-4 py-8 md:py-10 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Projects
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-4">
          Here are some of the projects I&apos;ve worked on, showcasing my
          skills in fullstack development. Check them out below!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 h-80">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 h-30 overflow-hidden">
                  {project.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
