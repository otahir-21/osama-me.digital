"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt angle in degrees */
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>();
  const [glow, setGlow] = useState({ x: 50, y: 50, visible: false });

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTransform(
      `perspective(900px) rotateX(${(0.5 - py) * intensity}deg) rotateY(${(px - 0.5) * intensity}deg)`
    );
    setGlow({ x: px * 100, y: py * 100, visible: true });
  }

  function onMouseLeave() {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");
    setGlow((g) => ({ ...g, visible: false }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("relative transition-transform duration-200 ease-out will-change-transform", className)}
      style={{ transform }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: glow.visible ? 1 : 0,
          background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(79,70,229,0.06), transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
