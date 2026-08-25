"use client";

import { useEffect, useState } from "react";

const lines = [
  "Flutter & React Native apps",
  "Laravel APIs at 99.9% uptime",
  "Stripe & Apple Pay integrations",
  "AWS & Firebase deployments",
];

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 2000;

export function TypedTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setLength(lines[0].length), 0);
      return () => window.clearTimeout(id);
    }

    const current = lines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && length < current.length) {
      timeout = setTimeout(() => setLength(length + 1), TYPE_MS);
    } else if (!deleting && length === current.length) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && length > 0) {
      timeout = setTimeout(() => setLength(length - 1), DELETE_MS);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setLineIndex((lineIndex + 1) % lines.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [length, deleting, lineIndex]);

  return (
    <p className="mt-6 font-mono text-sm text-stone-500">
      <span className="text-indigo-700">$</span> I ship{" "}
      <span className="text-stone-700">{lines[lineIndex].slice(0, length)}</span>
      <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-indigo-600" />
    </p>
  );
}
