import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneMockupProps {
  screenshot: string;
  className?: string;
}

export function PhoneMockup({ screenshot, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Radial glow behind phone */}
      <div className="absolute inset-0 phone-glow scale-150" />

      {/* iPhone frame */}
      <div className="relative z-10 bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Inner screen bezel */}
        <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
          {/* Notch/Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-3xl z-20" />

          {/* Screenshot */}
          <Image
            src={screenshot}
            alt="Rio App Screenshot"
            width={280}
            height={606}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
