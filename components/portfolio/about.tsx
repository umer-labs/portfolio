"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code following best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, optimized applications that scale with your business needs.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams using agile methodologies and clear communication.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying current with emerging technologies to deliver cutting-edge solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">01. About Me</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-balance">
            Turning Ideas Into Reality
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate Full Stack Software Engineer with expertise in 
              building modern web applications. With a strong foundation in both 
              frontend and backend development, I create seamless digital experiences 
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software development has equipped me with a deep 
              understanding of the entire development lifecycle. From architecting 
              robust APIs to crafting intuitive user interfaces, I bring a holistic 
              approach to every project I undertake.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              ahead of industry trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
