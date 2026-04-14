"use client"

import React from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, MessageSquare, FileText, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Google Sheets",
    desc: "Case details scattered across endless spreadsheet tabs that nobody can find.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Groups",
    desc: "Client instructions buried in chat threads between memes and voice notes.",
  },
  {
    icon: FileText,
    title: "Paper Files",
    desc: "Physical folders that get lost, damaged, or stuck on someone's desk.",
  },
  {
    icon: AlertTriangle,
    title: "Missed Deadlines",
    desc: "No reminders, no visibility — court dates slip through the cracks.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">The problem</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            Your current setup is costing you
            <br className="hidden sm:block" />
            <span className="text-secondary"> time and money.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {/* You studied law to practice law — not to wrestle with tools that weren't built for you. */}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                <item.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}