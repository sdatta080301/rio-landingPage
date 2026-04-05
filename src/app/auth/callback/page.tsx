"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const APP_SCHEME_BASE = "rio://auth/callback";

export default function AuthCallbackPage() {
  const [showFallback, setShowFallback] = useState(false);

  const appUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return APP_SCHEME_BASE;
    }
    return `${APP_SCHEME_BASE}${window.location.search}${window.location.hash}`;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const redirectTimer = window.setTimeout(() => {
      window.location.href = appUrl;
    }, 120);

    const fallbackTimer = window.setTimeout(() => {
      setShowFallback(true);
    }, 1400);

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, [appUrl]);

  return (
    <main className="min-h-screen bg-[#090d09] px-6 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl items-center justify-center">
        <section className="w-full rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b8f265] text-[#091109] shadow-[0_12px_30px_rgba(184,242,101,0.24)]">
            <span className="text-lg font-semibold">R</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Opening Rio
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            We verified your email. If Rio is installed, it should open automatically so you can finish signing in.
          </p>

          <div className="mt-8 rounded-[24px] border border-white/8 bg-black/20 p-5">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#b8f265]" />
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/65">
                Auth callback
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 break-all text-white/50">{appUrl}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={appUrl}
              className="inline-flex items-center justify-center rounded-2xl bg-[#b8f265] px-5 py-3 text-base font-semibold text-[#091109] transition hover:brightness-105"
            >
              Open Rio
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-3 text-base font-medium text-white/78 transition hover:bg-white/[0.06]"
            >
              Back to site
            </Link>
          </div>

          {showFallback && (
            <div className="mt-8 rounded-[24px] border border-[#b8f265]/20 bg-[#b8f265]/8 p-5 text-sm leading-6 text-white/82">
              <p className="font-semibold text-[#d8ff9d]">Didn&apos;t open?</p>
              <p className="mt-2">
                Open this email on the phone that has Rio installed, or tap <span className="font-semibold text-white">Open Rio</span> again.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
