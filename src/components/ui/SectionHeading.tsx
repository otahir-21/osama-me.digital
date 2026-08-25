"use client";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.25rem]">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
