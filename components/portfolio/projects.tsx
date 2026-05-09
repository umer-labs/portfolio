"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "Finance Management System",
    description:
      "A full-featured e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
    tech: ["Laravel","React.js", "MySQL", "Redis", "Stripe"],
    live: "https://focal.live",
    image: "/focal.jpeg",
  },
  {
    title: "Child Monitoring Application",
    description:
      "Developed a backend system for a parental monitoring platform that tracks child device activity, including installed apps, messages, calls, media, and location data. Built with Laravel, the system stores incoming device data securely and powers a dashboard where activity details can be viewed and managed efficiently.",
    tech: ["Laravel", "JavaScript", "MySQL"],
    live: "https://nexaspy.com",
    image: "/nexaspy.jpeg",
  },
  {
    title: "Event Management Application (SaaS)",
    description:
      "Contributed to the development of a Laravel-based SaaS Event Management management system with a strong focus on role-based architecture and permissions handling. Implemented access control logic for different user types and integrated Twilio for live SMS messaging and user notifications.",
    tech: ["Laravel", "JavaScript", "MySQL", "Twilio"],
    image: "/khata_banam.webp",
  },
  {
    title: "Kids Learning Application",
    description:"Worked on the backend development of an Android-based educational application for children. Responsible for building APIs in Laravel, managing backend logic, and supporting mobile app functionality through reliable server-side development.",
      tech: ["Laravel", "Firebase", "MySQL"],
    image: "/kids-learning.jpeg",
  },
  {
    title: "Shopify CRM",
    description:"A Laravel-based CRM built to manage Shopify store operations, including products, inventory, and customer data. The system integrates with the Shopify API and GraphQL to sync store information and support efficient day-to-day ecommerce management.",
      tech: ["Laravel", "MySQL"],
    image: "/shopify-crm.jpg",
  },
  {
    title: "Call Center CRM",
    description:"A Laravel-based CRM designed to manage call records, SMS activity, and user data through a web-based dashboard. The platform helps teams monitor communication data and access customer-related information from a central browser-based system.",
      tech: ["Laravel", "MySQL"],
    image: "/2026-04-22_16-57.png",
  },

];

const otherProjects = [
  {
    title: "API Gateway Service",
    description: "Centralized API gateway with rate limiting, authentication, and request routing.",
    tech: ["Redis", "Docker"],
  },
  {
    title: "Real-time Chat App",
    description: "Scalable chat application with end-to-end encryption and file sharing.",
    tech: ["Node.js", "MongoDB"],
  },
  {
    title: "CMS Platform",
    description: "Headless CMS with customizable content types and multi-language support.",
    tech: ["Laravel", "MySQL"],
  },
  {
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with customizable widgets and data visualization.",
    tech: ["PostgreSQL"],
  },
  {
    title: "Task Automation Tool",
    description: "Workflow automation platform with visual builder and third-party integrations.",
    tech: ["Node.js", "Redis"],
  },
  {
    title: "Inventory System",
    description: "Multi-warehouse inventory management with barcode scanning and reporting.",
    tech: ["Laravel", "MySQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">03. Projects</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-balance">
            Featured Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building scalable applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-video rounded-xl bg-card border border-border overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors z-10" />

                  <img
                    src={project.image}
                    alt="Project Preview"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center z-20">
                   
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <span className="text-primary font-mono text-sm">Featured Project</span>
                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                <div className="mt-4 p-6 rounded-xl bg-card border border-border">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`mt-6 flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold">Other Noteworthy Projects</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <a href="https://github.com/umer-labs" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
