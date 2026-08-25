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
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-indigo-700">
          {eyebrow}
        </p>
      )}
      <Heading className="text-3xl font-semibold tracking-tight text-stone-800 sm:text-4xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
