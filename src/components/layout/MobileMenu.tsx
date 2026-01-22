"use client";

import { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  onWaitlistClick?: () => void;
}

export function MobileMenu({ isOpen, onClose, links, onWaitlistClick }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] md:hidden transition-all duration-300",
        isOpen ? "visible" : "invisible"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-background/95 backdrop-blur-xl transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Menu Content */}
      <div
        className={cn(
          "relative h-full flex flex-col items-center justify-center transition-all duration-300",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-white"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Links */}
        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-3xl font-semibold text-white hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Waitlist Button */}
          {onWaitlistClick && (
            <button
              onClick={onWaitlistClick}
              className="flex items-center gap-2 text-3xl font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Sparkles className="w-7 h-7" />
              Join Waitlist
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
