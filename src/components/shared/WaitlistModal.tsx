"use client";

import { useState } from "react";
import { X, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-border-subtle p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">
                Join the Waitlist
              </h2>
              <p className="text-text-muted text-sm">
                Be the first to know when Rio launches.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3.5 bg-surface border border-border-subtle rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-rio-green focus:ring-1 focus:ring-rio-green transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-rio-green text-text-primary font-medium rounded-xl transition-all duration-300",
                  isLoading ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_4px_20px_hsla(76,88%,69%,0.4)]"
                )}
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-text-primary/30 border-t-text-primary rounded-full animate-spin" />
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-text-muted text-xs mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rio-green flex items-center justify-center">
              <Check className="w-8 h-8 text-text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">
              You&apos;re on the list!
            </h2>
            <p className="text-text-muted text-sm">
              We&apos;ll notify you when Rio is ready.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
