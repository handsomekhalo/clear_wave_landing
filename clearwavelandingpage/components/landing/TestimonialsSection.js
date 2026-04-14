'use client';

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ClearWave finally gave us a system that understands how we work. We went from losing files to running a tight ship.",
    name: "Adv. Thandi Molefe",
    role: "Solo Practitioner, Johannesburg",
    initials: "TM",
  },
  {
    quote: "Our university legal clinic handles over 200 cases a semester. ClearWave made it possible to actually track them all.",
    name: "Prof. Kwame Asante",
    role: "University of Ghana Legal Aid",
    initials: "KA",
  },
  {
    quote: "The client portal alone saved us hours every week. Clients can check their case status without calling us five times a day.",
    name: "Fatima Osei-Mensah",
    role: "Partner, Osei & Co., Accra",
    initials: "FO",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            Trusted by legal professionals
            <span className="text-secondary"> across Africa.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-7 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              <p className="text-sm text-foreground/80 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}