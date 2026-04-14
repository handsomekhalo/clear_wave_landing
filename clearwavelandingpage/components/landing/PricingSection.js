"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "R0",
    period: "/month",
    desc: "Perfect for getting started.",
    features: ["Up to 5 active cases", "Basic document storage", "1 user", "Email support"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Solo",
    price: "R350",
    period: "/month",
    desc: "For solo advocates and paralegals.",
    features: ["Unlimited cases", "5 GB document storage", "Audit trails", "Client portal", "Priority support"],
    cta: "Request Early Access",
    popular: false,
  },
  {
    name: "Small Firm",
    price: "R750",
    period: "/month",
    desc: "For small firms up to 5 people.",
    features: ["Everything in Solo", "Up to 5 team members", "20 GB storage", "Team collaboration", "Custom branding"],
    cta: "Request Early Access",
    popular: true,
  },
  {
    name: "Growing Firm",
    price: "R1,500",
    period: "/month",
    desc: "For growing practices.",
    features: ["Everything in Small Firm", "Unlimited team members", "100 GB storage", "Advanced analytics", "Dedicated support", "API access"],
    cta: "Request Early Access",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
            Simple, transparent
            <span className="text-secondary"> pricing.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Start free and scale as your practice grows. No hidden fees, no long-term contracts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "border-secondary bg-primary text-primary-foreground shadow-xl scale-[1.02]"
                  : "border-border bg-card hover:border-secondary/30 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <h3 className={`font-bold text-lg ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`text-3xl font-extrabold ${plan.popular ? "text-secondary" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-secondary" : "text-secondary"}`} />
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="#hero" className="mt-6">
                <Button
                  className={`w-full rounded-full font-semibold ${
                    plan.popular
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}