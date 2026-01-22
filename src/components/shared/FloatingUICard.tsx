import { cn } from "@/lib/utils";

interface FloatingUICardProps {
  children: React.ReactNode;
  position: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  rotation?: number;
  className?: string;
}

const positionClasses = {
  'left-top': 'left-0 top-[15%]',
  'left-bottom': 'left-0 bottom-[15%]',
  'right-top': 'right-0 top-[15%]',
  'right-bottom': 'right-0 bottom-[15%]',
};

export function FloatingUICard({
  children,
  position,
  rotation = 0,
  className
}: FloatingUICardProps) {
  return (
    <div
      className={cn(
        "absolute hidden lg:block",
        positionClasses[position],
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-4 max-w-[200px]">
        {children}
      </div>
    </div>
  );
}
