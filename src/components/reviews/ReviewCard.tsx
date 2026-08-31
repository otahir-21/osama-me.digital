import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return `${first}${last}`.toUpperCase();
}

function formatReviewDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString("en-AE", { month: "long", year: "numeric" });
}

export function ReviewCard({
  review,
  className,
  density = "featured",
}: {
  review: Testimonial;
  className?: string;
  density?: "featured" | "compact";
}) {
  const compact = density === "compact";

  return (
    <blockquote
      className={cn(
        "rounded-2xl border border-border bg-card shadow-sm",
        compact ? "p-6 sm:p-8" : "p-8 sm:p-10 lg:p-12",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
          {review.sourceLabel}
        </p>
        <span className="hidden h-1 w-1 rounded-full bg-border sm:block" aria-hidden />
        <p className="text-sm text-muted-foreground">{formatReviewDate(review.date)}</p>
        <span className="hidden h-1 w-1 rounded-full bg-border sm:block" aria-hidden />
        <p className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={cn(
                "size-3.5",
                i < review.rating ? "fill-primary text-primary" : "text-border"
              )}
              aria-hidden
            />
          ))}
        </p>
      </div>

      <p
        className={cn(
          "mt-8 max-w-3xl leading-relaxed text-foreground",
          compact ? "text-base sm:text-lg" : "text-lg sm:text-xl sm:leading-relaxed"
        )}
      >
        {review.quote}
      </p>

      <footer className="mt-10 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/8 text-sm font-semibold text-primary"
            aria-hidden
          >
            {initials(review.author)}
          </div>
          <div>
            <cite className="not-italic text-base font-semibold tracking-tight text-foreground">
              {review.author}
            </cite>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
              {review.role}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{review.service}</p>
          </div>
        </div>
        <a
          href={review.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:text-primary-hover"
        >
          View on {review.sourceLabel}
        </a>
      </footer>

      {review.dimensions.length > 0 ? (
        <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 lg:grid-cols-4">
          {review.dimensions.map((item) => (
            <div key={item.label}>
              <dt className="text-sm text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 text-base font-semibold tracking-tight text-foreground">
                {item.rating.toFixed(1)}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </blockquote>
  );
}
