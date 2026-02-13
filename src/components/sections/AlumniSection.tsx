"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const alumni = [
  { name: "Tesla", logo: "/logos/tesla.png" },
  { name: "Georgia Tech", logo: "/logos/gatech.png" },
  { name: "Ford", logo: "/logos/ford.png" },
  { name: "Intel", logo: null },
  { name: "UC Santa Cruz", logo: "/logos/ucsc.svg" },
];

// Triple the items for seamless looping
const scrollItems = [...alumni, ...alumni, ...alumni];

export function AlumniSection() {
  return (
    <section id="about" className="relative bg-background pb-8 pt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bento-card p-8 sm:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-text-primary text-center mb-2">
            Built by Alumni From
          </h3>
          <p className="text-sm text-text-muted text-center mb-8">
            Our team comes from world-class companies and universities
          </p>

          {/* Infinite scrolling carousel */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <motion.div
                className="flex items-center"
                animate={{ x: [0, -(alumni.length * 200)] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {scrollItems.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center justify-center shrink-0 h-12"
                    style={{ width: 200 }}
                  >
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={140}
                        height={48}
                        className="h-10 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-[#0068b5] tracking-tight">
                        intel
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
