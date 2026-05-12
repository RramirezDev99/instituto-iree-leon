"use client";

import Image from "next/image";

/**
 * Logo oficial del Instituto IREE León (2017).
 * Variantes:
 *  - "color"   → trébol verde sobre fondo blanco/transparente
 *  - "white"   → trébol blanco sobre fondo verde/oscuro
 *  - "isotipo" → solo el ícono (sin texto)
 */
export default function Logo({
  variant = "color",
  className = "",
  size = 48
}: {
  variant?: "color" | "white" | "isotipo";
  className?: string;
  size?: number;
}) {
  const src =
    variant === "white" ? "/logo-iree-white.png" : "/logo-iree.png";

  if (variant === "isotipo") {
    return (
      <Image
        src={src}
        alt="Instituto IREE León"
        width={size}
        height={size}
        priority
        className={className}
      />
    );
  }

  const isWhite = variant === "white";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={src}
        alt="Instituto IREE León"
        width={size}
        height={size}
        priority
        className="object-contain drop-shadow-sm"
        style={{ height: size, width: "auto" }}
      />
      <div className="leading-tight">
        <div
          className={`font-display text-base sm:text-lg uppercase tracking-tight ${
            isWhite ? "text-white" : "text-brand-600"
          }`}
        >
          Instituto IREE
        </div>
        <div
          className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase ${
            isWhite ? "text-white/80" : "text-ink-700"
          }`}
        >
          León · Guanajuato
        </div>
      </div>
    </div>
  );
}
