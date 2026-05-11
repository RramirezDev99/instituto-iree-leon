"use client";

/**
 * Logo placeholder oficial del Instituto IREE.
 * Variantes:
 *  - "color"   → letras verdes sobre fondo blanco
 *  - "white"   → letras blancas sobre fondo verde
 *  - "compact" → pastilla cuadrada con la "I" (para favicons o navbar móvil)
 */
export default function Logo({
  variant = "color",
  className = ""
}: {
  variant?: "color" | "white" | "compact";
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <div
        className={`relative w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30 ${className}`}
      >
        <span className="font-display text-white text-lg leading-none">I</span>
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-ink-900 ring-2 ring-white" />
      </div>
    );
  }

  const isWhite = variant === "white";
  const textColor = isWhite ? "text-white" : "text-brand-600";
  const subColor = isWhite ? "text-white/80" : "text-ink-700";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
          isWhite
            ? "bg-white"
            : "bg-gradient-to-br from-brand-500 to-brand-700 shadow-brand-500/30"
        }`}
      >
        <span
          className={`font-display text-xl leading-none ${
            isWhite ? "text-brand-600" : "text-white"
          }`}
        >
          I
        </span>
        <div
          className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full ring-2 ring-white ${
            isWhite ? "bg-brand-500" : "bg-ink-900"
          }`}
        />
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base sm:text-lg ${textColor}`}>
          INSTITUTO IREE
        </div>
        <div
          className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase ${subColor}`}
        >
          León · Guanajuato
        </div>
      </div>
    </div>
  );
}
