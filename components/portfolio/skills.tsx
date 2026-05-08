"use client";

import { motion } from "framer-motion";
import {
  Database,
  Server,
  Layout,
  Cloud,
  Code2,
  Layers,
  Cpu,
  GitBranch,
  Container,
  Terminal,
  FileJson,
  Braces,
  Globe,
  Workflow,
  HardDrive,
  Boxes,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500",
    skills: [
      { name: "Laravel", icon: Layers },
      { name: "NestJS", icon: Boxes },
      { name: "Node.js", icon: Cpu },
      { name: "PHP", icon: Code2 },
      { name: "Express.js", icon: Workflow },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
    skills: [
      { name: "React.js", icon: Braces },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileJson },
      { name: "JavaScript", icon: Code2 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Layers },
      { name: "Redis", icon: HardDrive },
      { name: "Prisma", icon: Boxes },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-500",
    skills: [
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "AWS", icon: Cloud },
      { name: "CI/CD", icon: Workflow },
      { name: "Linux", icon: Terminal },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">02. Skills</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-balance">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit honed over years of building production-ready applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group relative p-6 rounded-xl bg-card border border-border overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Decorative background icon */}
                <CategoryIcon className="absolute -right-4 -bottom-4 w-32 h-32 text-muted-foreground/5 group-hover:text-muted-foreground/10 transition-colors duration-500" />

                <div className="relative">
                  <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
                    <span
                      className={`p-2 rounded-lg bg-secondary ${category.iconColor}`}
                    >
                      <CategoryIcon className="w-5 h-5" />
                    </span>
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/20 transition-all duration-200 cursor-default"
                        >
                          <SkillIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground truncate">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "REST APIs",
              "GraphQL",
              "WebSockets",
              "OAuth",
              "JWT",
              "Microservices",
              "Testing",
              "Agile",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-mono bg-secondary/50 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
