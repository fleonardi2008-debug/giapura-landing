/**
 * Íconos propios en estilo línea (outline): Phosphor no tiene maní ni
 * "sin azúcar" en este estilo. Mismo formato que un ícono de Phosphor
 * (tamaño configurable, currentColor) para que combinen en la grilla.
 */
type IconProps = { size?: number; className?: string; weight?: string };

const base = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Maní con cáscara: dos lóbulos redondeados con la cintura marcada. */
export function IconMani({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <path d="M8,7 A4.2,4.2 0 1,1 16,7 C16,9 14.5,10 13.5,11 C14.5,12 16,13 16,15 A4.2,4.2 0 1,1 8,15 C8,13 9.5,12 10.5,11 C9.5,10 8,9 8,7 Z" />
    </svg>
  );
}

/** Cubo de azúcar tachado: "sin azúcar agregada". */
export function IconSinAzucar({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M3,21 L21,3" strokeWidth="1.8" />
    </svg>
  );
}
