"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.123 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactCards = [
  {
    key: "email",
    label: "Email",
    value: CONTACT.email,
    actionLabel: "Send an email",
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    target: undefined,
    download: false,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: CONTACT.phoneDisplay,
    actionLabel: "Chat on WhatsApp",
    href: CONTACT.whatsappUrl,
    icon: WhatsAppIcon,
    target: "_blank" as const,
    download: false,
  },
  {
    key: "phone",
    label: "Phone",
    value: CONTACT.phoneDisplay,
    actionLabel: "Call me",
    href: `tel:${CONTACT.phoneE164}`,
    icon: Phone,
    target: undefined,
    download: false,
  },
  {
    key: "cv",
    label: "Resume / CV",
    value: "View my full experience",
    actionLabel: "Download CV",
    href: "/cv.pdf",
    icon: FileText,
    target: undefined,
    download: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Green radial glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="h-[500px] w-[700px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let&apos;s Build Something{" "}
            <span className="text-primary">Great</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities?{" "}
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="gap-2 px-8">
            <a href={`mailto:${CONTACT.email}`}>
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 px-8 border-border hover:border-primary/60 hover:bg-primary/5 hover:text-primary"
          >
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {contactCards.map(({ key, label, value, actionLabel, href, icon: Icon, target, download }) => (
            <div
              key={key}
              className="group rounded-xl border border-border bg-card/50 p-6 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:bg-card transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="mt-1 text-xs text-muted-foreground break-all sm:break-normal leading-relaxed">
                  {value}
                </p>
              </div>
              <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                download={download ? true : undefined}
                className="mt-auto text-xs text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                {actionLabel} →
              </a>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-10 border-t border-border flex flex-col items-center gap-5"
        >
          <p className="text-sm text-muted-foreground">Connect with me</p>
          <div className="flex gap-4">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-lg bg-secondary border border-border hover:border-primary/40 hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={15} className="text-muted-foreground" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-lg bg-secondary border border-border hover:border-primary/40 hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={15} className="text-muted-foreground" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
