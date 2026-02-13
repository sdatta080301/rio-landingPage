"use client";

import { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  onWaitlistClick?: () => void;
}

export function MobileMenu({ isOpen, onClose, links, onWaitlistClick }: MobileMenuProps) {
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
          "absolute inset-0 bg-white/95 backdrop-blur-xl transition-opacity duration-300",
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
          className="absolute top-4 right-4 p-2 text-text-primary"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Links */}
        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-3xl font-semibold text-text-primary hover:text-text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Waitlist Button */}
          {onWaitlistClick && (
            <button
              onClick={onWaitlistClick}
              className="flex items-center gap-2 px-8 py-3 bg-rio-green text-text-primary font-semibold text-lg rounded-full"
            >
              Join Waitlist
              <ArrowUpRight className="w-5 h-5" />
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
