"use client";

import { useState } from "react";
import { Plus, Shield, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { WaitlistModal } from "@/components/shared/WaitlistModal";

const connections = [
  { name: "Savannah Nguyen", subtitle: "Unlock the power of real-time" },
  { name: "Brooklyn Simmons", subtitle: "Unlock the power of real-time" },
  { name: "Albert Flores", subtitle: "Unlock the power of real-time" },
];

export function FeaturesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="features" className="relative bg-background pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 - Connect Easily */}
            <motion.div
              className="bento-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text-primary">Connect Easily</h3>
                <span className="text-sm text-text-muted">See all</span>
              </div>

              <div className="space-y-4">
                {connections.map((person) => (
                  <div key={person.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
                        {person.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-primary">{person.name}</p>
                        <p className="text-xs text-text-muted">{person.subtitle}</p>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center hover:bg-surface transition-colors">
                      <Plus className="w-4 h-4 text-text-secondary" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2 - Digital Banking Platform */}
            <motion.div
              className="bento-card p-6 bg-gradient-to-br from-rio-green/30 to-rio-green/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Digital Banking
                <br />
                Platform!
              </h3>

              {/* Platform icons */}
              <div className="flex items-center gap-3 my-4">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 2H6.477A4.477 4.477 0 002 6.477v11.046A4.477 4.477 0 006.477 22h11.046A4.477 4.477 0 0022 17.523V6.477A4.477 4.477 0 0017.523 2zM12 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"/>
                  </svg>
                </div>
              </div>

              {/* Try Now button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-rio-green text-text-primary font-medium text-sm rounded-full cta-button"
              >
                Try Now
              </button>

              {/* Decorative blob */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rio-green/20 rounded-full blur-xl" />
            </motion.div>

            {/* Card 3 - Grow Capital */}
            <motion.div
              className="bento-card p-6 flex flex-col justify-between relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Badges */}
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-medium rounded-full -rotate-6">
                  Top rated App
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                  <span className="text-blue-700 text-lg font-bold">$</span>
                </div>
              </div>

              <div className="mt-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-full mb-3 rotate-3">
                  Revolutionary
                </div>
                <h3 className="text-xl font-bold text-text-primary leading-tight">
                  Grow your capital with
                  <br />
                  No boundary at all
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <Shield className="w-4 h-4 text-text-muted" />
                  <span className="text-sm text-text-muted">Trusted by 50,000+ people</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
