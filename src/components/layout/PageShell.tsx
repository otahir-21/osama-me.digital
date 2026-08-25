import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  /** Full-bleed alternate section surface for page rhythm */
  tone?: "default" | "alt";
}

export function PageShell({ children, className, wide, tone = "default" }: PageShellProps) {
  const inner = (
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

  if (tone === "alt") {
    return <div className="bg-surface-alt">{inner}</div>;
  }

  return inner;
}
