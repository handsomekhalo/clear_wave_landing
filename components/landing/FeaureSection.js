import React from "react";
import { motion } from "framer-motion";
import { FolderKanban, FileCheck2, Users, Link2 } from "lucide-react";

const features = [
  {
    icon: FolderKanban,
    title: "Case Tracking",
    desc: "Track every case from intake to resolution. Set deadlines, assign team members, and never miss a court date again.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FileCheck2,
    title: "Document Management",
    desc: "Upload, organise, and share documents with full audit trails. Know who accessed what and when.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Link2,
    title: "Client Portal",
    desc: "Give clients secure access to their case updates via magic link login — no passwords to remember.",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Assign tasks, share notes, and keep everyone aligned — whether you're in Nairobi, Lagos, or Johannesburg.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Features</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            Everything you need to
            <br className="hidden sm:block" />
            <span className="text-secondary"> run your practice.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Purpose-built tools that understand how African legal professionals actually work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}