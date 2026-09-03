import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("size-7 shrink-0 text-primary sm:size-8", className)}
      aria-hidden
    >
      <rect width="80" height="80" rx="16" fill="currentColor" />
      <circle
        cx="27"
        cy="40"
        r="13.25"
        fill="none"
        stroke="#fff"
        strokeWidth="7.5"
      />
      <path fill="#fff" d="M48 23h22v7.5h-7.25v26.5h-7.5V30.5H48V23z" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span
        className={cn(
          "text-lg font-semibold tracking-tight sm:text-xl",
          wordmarkClassName
        )}
      >
        Osama<span className="text-primary">.</span>
      </span>
    </span>
  );
}
