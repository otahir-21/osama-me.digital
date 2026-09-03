import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CoverComposition } from "@/data/portfolio";

interface ProjectCoverProps {
  title: string;
  /** Real screenshot path under /public, when the file exists. */
  image?: string;
  alt?: string;
  composition?: CoverComposition;
  className?: string;
  /** Larger type for hero / case-study covers */
  size?: "sm" | "lg";
  priority?: boolean;
}

function hashTitle(title: string) {
  return title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function coverSizes(size: "sm" | "lg", composition: CoverComposition) {
  if (composition === "phone") {
    return size === "lg"
      ? "(min-width: 1024px) 280px, (min-width: 640px) 200px, 160px"
      : "(min-width: 640px) 160px, 140px";
  }
  return size === "lg"
    ? "(min-width: 1024px) 700px, 100vw"
    : "(min-width: 640px) 50vw, 100vw";
}

function PhoneFrame({
  image,
  alt,
  sizes,
  priority,
  size,
}: {
  image: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  size: "sm" | "lg";
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-[#1A1220]",
        size === "lg" ? "px-8 py-7 sm:px-12" : "px-6 py-5"
      )}
    >
      <div
        className={cn(
          "relative aspect-[9/19.5] h-[88%] w-auto max-h-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
          size === "lg" ? "min-h-[16rem]" : "min-h-[11rem]"
        )}
      >
        <div className="absolute inset-0 rounded-[1.65rem] bg-black p-[5px] ring-1 ring-white/15 sm:rounded-[1.85rem] sm:p-[6px]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-black sm:rounded-[1.5rem]">
            <Image
              src={image}
              alt={alt}
              fill
              priority={priority}
              className="object-cover object-top"
              sizes={sizes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({
  image,
  alt,
  sizes,
  priority,
  size,
}: {
  image: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  size: "sm" | "lg";
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center bg-surface-alt",
        size === "lg" ? "p-5 sm:p-7" : "p-4"
      )}
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_12px_32px_rgba(17,24,39,0.08)]">
        <div
          className="flex shrink-0 items-center gap-1.5 border-b border-border bg-muted px-3"
          aria-hidden
        >
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="ml-2 my-2 h-3 w-1/2 max-w-48 rounded-sm bg-background" />
        </div>
        <div className="relative min-h-0 flex-1 bg-muted">
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
}

function DeviceFrame({
  image,
  alt,
  sizes,
  priority,
}: {
  image: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full bg-[#E8E4DC]">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        className="object-contain object-center"
        sizes={sizes}
      />
    </div>
  );
}

/** Dashboard / report captures — no product chrome, no beige letterbox. */
function ScreenshotFrame({
  image,
  alt,
  sizes,
  priority,
}: {
  image: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full bg-card">
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        className="object-contain object-center"
        sizes={sizes}
      />
    </div>
  );
}

/** Product-studio cover until real portfolio screenshots are added. */
export function ProjectCover({
  title,
  image,
  alt,
  composition = "device",
  className,
  size = "sm",
  priority = false,
}: ProjectCoverProps) {
  if (image) {
    const sizes = coverSizes(size, composition);
    const label = alt || title;

    return (
      <div className={cn("absolute inset-0 overflow-hidden bg-muted", className)}>
        {composition === "phone" ? (
          <PhoneFrame image={image} alt={label} sizes={sizes} priority={priority} size={size} />
        ) : composition === "browser" ? (
          <BrowserFrame image={image} alt={label} sizes={sizes} priority={priority} size={size} />
        ) : composition === "screenshot" ? (
          <ScreenshotFrame image={image} alt={label} sizes={sizes} priority={priority} />
        ) : (
          <DeviceFrame image={image} alt={label} sizes={sizes} priority={priority} />
        )}
      </div>
    );
  }

  const seed = hashTitle(title);
  const offset = (seed % 5) * 8;

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-end overflow-hidden bg-muted",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-x-5 top-6 rounded-xl border border-border bg-card shadow-sm",
          size === "lg" ? "bottom-16 sm:inset-x-8 sm:top-8 sm:bottom-20" : "bottom-14"
        )}
        style={{ transform: `translateY(${offset / 4}px)` }}
      >
        <div className="flex h-8 items-center gap-1.5 border-b border-border bg-muted px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="ml-2 h-3 w-1/2 max-w-40 rounded-sm bg-muted" />
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[0.28fr_1fr] gap-3 p-3">
          <div className="space-y-2 rounded-lg bg-muted p-2">
            <div className="h-2 w-3/4 rounded bg-border" />
            <div className="h-2 w-1/2 rounded bg-border" />
            <div className="mt-3 h-8 rounded bg-primary/8" />
            <div className="h-2 w-2/3 rounded bg-border" />
            <div className="h-2 w-1/2 rounded bg-border" />
          </div>
          <div className="space-y-3">
            <div className="h-16 rounded-lg bg-muted sm:h-24" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded bg-muted sm:h-14" />
              <div className="h-10 rounded bg-primary/10 sm:h-14" />
              <div className="h-10 rounded bg-muted sm:h-14" />
            </div>
            <div className="h-2 w-5/6 rounded bg-border" />
            <div className="h-2 w-2/3 rounded bg-border" />
          </div>
        </div>
      </div>
      <p
        className={cn(
          "relative z-10 w-full px-5 pb-4 font-semibold tracking-tight text-foreground",
          size === "lg" ? "text-base sm:px-8 sm:pb-6 sm:text-lg" : "text-sm"
        )}
      >
        {title}
      </p>
    </div>
  );
}
