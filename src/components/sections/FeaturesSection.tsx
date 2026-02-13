"use client";

import {
  Split,
  CreditCard,
  Target,
  ArrowLeftRight,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Split,
    title: "Split Expenses",
    description:
      "Split expenses with friends and family in real time, with per-person balances and settle-up tracking.",
  },
  {
    icon: CreditCard,
    title: "Connect Cards",
    description:
      "Connect credit cards via Plaid to import transactions and monitor monthly spending.",
  },
  {
    icon: Target,
    title: "Budget Tracking",
    description:
      "Track budget health with live total spent, remaining budget, and status indicators.",
  },
  {
    icon: ArrowLeftRight,
    title: "Smart Splits",
    description:
      "Add card transactions directly into splits so shared costs automatically update what each person owes.",
  },
  {
    icon: Users,
    title: "Social Finance",
    description:
      "Manage social finance in one place: invite/join groups, send friend requests, and coordinate payments.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-background pb-8 pt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 3 + 2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bento-card p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-11 h-11 rounded-2xl bg-rio-green/20 flex items-center justify-center mb-5">
                <feature.icon className="w-5 h-5 text-text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bento-card p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <div className="w-11 h-11 rounded-2xl bg-rio-green/20 flex items-center justify-center mb-5">
                <feature.icon className="w-5 h-5 text-text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
