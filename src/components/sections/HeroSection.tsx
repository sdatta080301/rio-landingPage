"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WaitlistModal } from "@/components/shared/WaitlistModal";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed - this is expected on some mobile browsers
      });
    }
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: videoY }}
        >
          <div className="absolute inset-0 bg-[#0a0a12]" />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-110"
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content with Parallax */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
          style={{ y: contentY, opacity }}
        >
          {/* Main Hero Content */}
          <div className="animate-fade-in-up">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Rio.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/50 max-w-md mx-auto mb-10 font-light tracking-wide">
              Automated tracking designed to keep your finances in perfect alignment.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="glass-button cta-button inline-flex items-center gap-2 px-8 py-4 text-white font-medium text-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ opacity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
