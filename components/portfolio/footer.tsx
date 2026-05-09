"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <a
            href="#"
            className="font-mono text-lg font-semibold text-primary"
          >
            {"<Umer />"}
          </a>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Muhammad Umer. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
