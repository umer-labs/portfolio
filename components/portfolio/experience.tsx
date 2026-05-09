"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Laravel Developer",
    company: "Nku Technologies Pvt.Ltd.",
    location: "On-site",
    period: "2024 - Present",
    description: [
      "Lead development of enterprise-level web applications serving 100K+ users",
      "Architected microservices infrastructure reducing system downtime by 40%",
      "Mentored junior developers and conducted code reviews to maintain quality standards",
    ],
  },
  {
    title: "Laravel Developer",
    company: "Solution Surface Pvt.Ltd.",
    location: "On-site",
    period: "2022 - 2024",
    description: [
      "Developed custom web applications for clients across various industries",
      "Built RESTful APIs and integrated third-party services",
      "Collaborated with design team to implement responsive, pixel-perfect UIs",
      "Optimized database queries resulting in 50% faster page load times",
    ],
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">04. Experience</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-balance">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-2" />

                <div className="flex-1 md:text-right pl-8 md:pl-0 md:pr-12">
                  {index % 2 === 0 && (
                    <div className="md:hidden" />
                  )}
                  {index % 2 === 1 && (
                    <ExperienceCard exp={exp} />
                  )}
                  {index % 2 === 0 && (
                    <div className="hidden md:block">
                      <ExperienceCard exp={exp} align="right" />
                    </div>
                  )}
                  {index % 2 === 0 && (
                    <div className="md:hidden">
                      <ExperienceCard exp={exp} />
                    </div>
                  )}
                </div>

                <div className="flex-1 pl-8 md:pl-12">
                  {index % 2 === 0 && (
                    <div className="hidden md:block">
                      <div className="inline-flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>
                    </div>
                  )}
                  {index % 2 === 1 && (
                    <div className="text-left">
                      <div className="inline-flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  align = "left",
}: {
  exp: (typeof experiences)[0];
  align?: "left" | "right";
}) {
  return (
    <div
      className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`flex items-center gap-2 text-primary mb-2 ${
          align === "right" ? "justify-end" : ""
        }`}
      >
        <Briefcase size={18} />
        <span className="font-mono text-sm">{exp.company}</span>
      </div>
      <h3 className="text-xl font-semibold">{exp.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
      <div className="md:hidden mt-2">
        <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
      </div>
      <ul
        className={`mt-4 space-y-2 ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {exp.description.map((item, i) => (
          <li
            key={i}
            className={`text-sm text-muted-foreground flex items-start gap-2 ${
              align === "right" ? "flex-row-reverse" : ""
            }`}
          >
            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
