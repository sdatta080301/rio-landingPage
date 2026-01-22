"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { WaitlistModal } from "@/components/shared/WaitlistModal";
import { Sparkles } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#features", label: "Features" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar Container */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
        <nav className="relative flex items-center justify-between px-2 py-2 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/[0.03] via-transparent to-purple-500/[0.03] pointer-events-none" />

          {/* Desktop Navigation - Evenly spaced */}
          <div className="hidden md:flex items-center justify-between w-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex-1 text-center px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-xl hover:bg-white/[0.05]"
              >
                {link.label}
              </Link>
            ))}

            {/* Join Waitlist Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 group relative inline-flex items-center justify-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              {/* Gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-90 group-hover:opacity-100 transition-opacity" />
              {/* Content */}
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Join Waitlist
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between w-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex-1 text-center px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Waitlist Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 group relative inline-flex items-center justify-center gap-1 px-3 py-2 text-white text-sm font-medium rounded-xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-90" />
              <span className="relative flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Waitlist
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        onWaitlistClick={() => {
          setMobileMenuOpen(false);
          setIsModalOpen(true);
        }}
      />

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
