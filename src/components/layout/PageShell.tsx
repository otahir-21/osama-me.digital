import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function PageShell({ children, className, wide }: PageShellProps) {
  return (
    <div
      className={cn(
        "mx-auto px-5 py-16 sm:px-6 lg:px-8 lg:py-24",
        wide ? "max-w-6xl" : "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
