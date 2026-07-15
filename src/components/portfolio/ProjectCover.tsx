import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  title: string;
  className?: string;
  /** Larger type for hero / case-study covers */
  size?: "sm" | "lg";
}

/** Temporary cover until real portfolio screenshots are added. */
export function ProjectCover({ title, className, size = "sm" }: ProjectCoverProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800",
        className
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 20% 20%, rgba(52,211,153,0.12), transparent)," +
            "radial-gradient(ellipse 60% 40% at 80% 80%, rgba(52,211,153,0.06), transparent)",
        }}
      />
      <p
        className={cn(
          "relative z-10 max-w-[90%] text-center font-semibold tracking-tight text-zinc-200",
          size === "lg" ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
        )}
      >
        {title}
      </p>
    </div>
  );
}
