import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  title: string;
  className?: string;
  /** Larger type for hero / case-study covers */
  size?: "sm" | "lg";
}

function hashTitle(title: string) {
  return title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

/** Product-studio cover until real portfolio screenshots are added. */
export function ProjectCover({ title, className, size = "sm" }: ProjectCoverProps) {
  const seed = hashTitle(title);
  const offset = (seed % 5) * 8;

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-end overflow-hidden bg-stone-100",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-x-5 top-6 rounded-xl border border-stone-200 bg-white shadow-sm",
          size === "lg" ? "bottom-16 sm:inset-x-8 sm:top-8 sm:bottom-20" : "bottom-14"
        )}
        style={{ transform: `translateY(${offset / 4}px)` }}
      >
        <div className="flex h-8 items-center gap-1.5 border-b border-stone-100 bg-stone-50 px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-stone-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-stone-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-stone-300" />
          <span className="ml-2 h-3 w-1/2 max-w-40 rounded-sm bg-stone-100" />
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[0.28fr_1fr] gap-3 p-3">
          <div className="space-y-2 rounded-lg bg-stone-50 p-2">
            <div className="h-2 w-3/4 rounded bg-stone-200" />
            <div className="h-2 w-1/2 rounded bg-stone-200" />
            <div className="mt-3 h-8 rounded bg-indigo-50" />
            <div className="h-2 w-2/3 rounded bg-stone-200" />
            <div className="h-2 w-1/2 rounded bg-stone-200" />
          </div>
          <div className="space-y-3">
            <div className="h-16 rounded-lg bg-stone-50 sm:h-24" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded bg-stone-50 sm:h-14" />
              <div className="h-10 rounded bg-indigo-50/80 sm:h-14" />
              <div className="h-10 rounded bg-stone-50 sm:h-14" />
            </div>
            <div className="h-2 w-5/6 rounded bg-stone-200" />
            <div className="h-2 w-2/3 rounded bg-stone-200" />
          </div>
        </div>
      </div>
      <p
        className={cn(
          "relative z-10 w-full px-5 pb-4 font-semibold tracking-tight text-stone-800",
          size === "lg" ? "text-base sm:px-8 sm:pb-6 sm:text-lg" : "text-sm"
        )}
      >
        {title}
      </p>
    </div>
  );
}
