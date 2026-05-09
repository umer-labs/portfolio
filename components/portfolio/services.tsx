"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Custom web applications built with modern frameworks and best practices. From single-page apps to complex enterprise solutions.",
    features: ["React.js", "Laravel / PHP"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable and secure backend systems with robust APIs. Designed for performance and maintainability.",
    features: ["Node.js", "RESTful APIs", "GraphQL"],
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient database architecture and optimization. From relational to NoSQL solutions based on your needs.",
    features: ["MySQL / PostgreSQL", "MongoDB", "Redis Caching"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup and deployment automation. Ensuring your applications run smoothly in production.",
    features: ["AWS / GCP", "Docker"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first interfaces that work flawlessly across all devices. Pixel-perfect implementation of designs.",
    features: [ "Mobile-First", "Cross-Browser"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Performance",
    description:
      "Security audits and performance optimization. Keeping your applications safe and fast.",
    features: ["Security Best Practices", "Performance Audits", "Code Reviews"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">05. Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-balance">
            What I Can Do For You
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
