/**
 * Puente de color entre dos secciones contiguas.
 *
 * Se coloca dentro de la sección de destino, pegado al borde que comparte
 * con la anterior: arranca con el color de la sección que viene y se
 * disuelve en la propia. Así el salto crema → marrón deja de ser un corte
 * seco y pasa a ser un degradé.
 *
 * Los cortes duros entre bloques de color se notan más cuanto mayor es el
 * contraste, por eso los tramos claro↔oscuro usan una altura más generosa.
 */
const COLOR = {
  bg: "var(--bg)",
  "bg-2": "var(--bg-2)",
  dark: "var(--dark)",
} as const;

export function PuenteColor({
  desde,
  posicion = "arriba",
  altura = 140,
}: {
  /** Color de la sección vecina, del que arranca el degradé. */
  desde: keyof typeof COLOR;
  /** Borde de la sección donde se apoya el puente. */
  posicion?: "arriba" | "abajo";
  /** Alto del degradé en px. Más alto = transición más gradual. */
  altura?: number;
}) {
  const direccion = posicion === "arriba" ? "to bottom" : "to top";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-[1] ${
        posicion === "arriba" ? "top-0" : "bottom-0"
      }`}
      style={{
        height: altura,
        background: `linear-gradient(${direccion}, ${COLOR[desde]}, transparent)`,
      }}
    />
  );
}
