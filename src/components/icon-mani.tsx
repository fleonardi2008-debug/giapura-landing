/**
 * Ícono de maní hecho a mano: Phosphor no tiene ninguno. Mismo formato
 * que los íconos de Phosphor (tamaño configurable, currentColor) para
 * que combine con el resto en la grilla de características.
 */
export function IconMani({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
  weight?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M7,8 A5,5 0 1,1 17,8 C17,10 15,11 14,12 C15,13 17,14 17,16 A5,5 0 1,1 7,16 C7,14 9,13 10,12 C9,11 7,10 7,8 Z" />
    </svg>
  );
}
