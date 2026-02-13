"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WaitlistModal } from "@/components/shared/WaitlistModal";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative bg-background pt-4 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two-card hero grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 lg:grid-rows-[600px]">
            {/* Left Card - Text Content */}
            <motion.div
              className="bento-card p-8 sm:p-10 lg:p-12 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.1] tracking-tight">
                  The easiest
                  <br />
                  all-in-one
                  <br />
                  personal finance platform
                </h1>

                <p className="text-text-secondary text-base max-w-sm leading-relaxed">
                  Streamline your financial management with our intuitive, scalable platform. Automated tracking designed for smarter spending.
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="cta-button inline-flex items-center gap-2 px-6 py-3 bg-rio-green text-text-primary font-medium rounded-full text-sm"
                  >
                    Join Waitlist
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center w-12 h-12 bg-text-primary text-white rounded-full hover:bg-text-primary/90 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Stats at bottom of left card */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-text-secondary" />
                  </div>
                  <div className="h-px w-8 bg-border-subtle hidden sm:block" />
                  <div>
                    <p className="text-xl font-bold text-text-primary">15 Million+</p>
                    <p className="text-xs text-text-muted max-w-[200px]">Unlock the power of real-time analytics with our cutting-edge financial</p>
                  </div>
                </div>

                {/* Avatar group */}
                <div className="flex items-center -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-[10px] text-white font-medium"
                    >
                      {["JA", "SN", "BS", "AF"][i - 1]}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Card - Phone Mockup */}
            <motion.div
              className="bento-card relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/landing-phone.png"
                alt="Rio App"
                width={700}
                height={600}
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
