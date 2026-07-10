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
        "mx-auto px-6 py-12 lg:px-12 lg:py-16",
        wide ? "max-w-5xl" : "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
