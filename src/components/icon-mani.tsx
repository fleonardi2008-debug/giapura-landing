/**
 * Íconos propios en estilo línea (outline), calcados de la referencia que
 * pasó el cliente: maní con textura de cáscara y cubos de azúcar tachados.
 * Mismo formato que un ícono de Phosphor (tamaño configurable, currentColor)
 * para que combinen en la grilla.
 */
type IconProps = { size?: number; className?: string; weight?: string };

const base = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Maní con cáscara, en diagonal, con marcas de textura en cada lóbulo. */
export function IconMani({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <g transform="rotate(45 12 12)">
        <path d="M8,7 A4.2,4.2 0 1,1 16,7 C16,9 14.5,10 13.5,11 C14.5,12 16,13 16,15 A4.2,4.2 0 1,1 8,15 C8,13 9.5,12 10.5,11 C9.5,10 8,9 8,7 Z" />
        <path d="M9,5.5 L11,7.5 M13,5.5 L15,7.5" strokeWidth={1.1} />
        <path d="M9,16.5 L11,14.5 M13,16.5 L15,14.5" strokeWidth={1.1} />
      </g>
    </svg>
  );
}

/** Cubos de azúcar tachados: "sin azúcares añadidos". */
export function IconSinAzucar({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden {...base}>
      <circle cx="12" cy="12" r="9.5" />
      <rect x="4.5" y="12.5" width="5" height="5" />
      <rect x="10.5" y="12.5" width="5" height="5" />
      <rect x="7.5" y="6.5" width="5" height="5" />
      <path d="M3.8,17 L20.2,7" strokeWidth={1.8} />
    </svg>
  );
}
