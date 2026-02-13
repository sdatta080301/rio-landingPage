"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { WaitlistModal } from "@/components/shared/WaitlistModal";
import { ArrowUpRight, Home, Globe, CreditCard, LayoutGrid, Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#features", label: "Features", icon: LayoutGrid },
  { href: "#about", label: "About Us", icon: Globe },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-background px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="max-w-7xl mx-auto bento-card px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/rio-icon.png"
              alt="Rio"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-lg font-bold text-text-primary">rio financials.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-surface"
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cta-button inline-flex items-center gap-2 px-5 py-2.5 bg-rio-green text-text-primary font-medium text-sm rounded-full"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center w-10 h-10 bg-text-primary text-white rounded-full hover:bg-text-primary/90 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks.map(({ href, label }) => ({ href, label }))}
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
