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
    // Simulate API call - replace with actual waitlist API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Join the Waitlist
              </h2>
              <p className="text-white/50 text-sm">
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
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full relative flex items-center justify-center gap-2 px-6 py-3.5 text-white font-medium rounded-xl overflow-hidden transition-all duration-300",
                  isLoading ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                )}
              >
                {/* Gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600" />
                {/* Content */}
                <span className="relative flex items-center gap-2">
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>
            </form>

            <p className="text-center text-white/30 text-xs mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              You&apos;re on the list!
            </h2>
            <p className="text-white/50 text-sm">
              We&apos;ll notify you when Rio is ready.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
