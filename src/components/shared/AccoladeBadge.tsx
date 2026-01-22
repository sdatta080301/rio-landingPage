import { cn } from "@/lib/utils";

interface AccoladeBadgeProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  leaves?: boolean;
  className?: string;
}

export function AccoladeBadge({
  icon,
  title,
  subtitle,
  leaves = false,
  className
}: AccoladeBadgeProps) {
  return (
    <div className={cn("relative", className)}>
      {leaves && (
        <>
          <span className="absolute -top-2 -left-3 text-lg opacity-60">🌿</span>
          <span className="absolute -bottom-2 -right-3 text-lg opacity-60 rotate-180">🌿</span>
        </>
      )}
      <div className="glass px-4 py-3 flex items-center gap-3">
        {icon && (
          <div className="text-2xl">{icon}</div>
        )}
        <div>
          <p className="text-white font-semibold text-sm">{title}</p>
          {subtitle && (
            <p className="text-text-secondary text-xs">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
