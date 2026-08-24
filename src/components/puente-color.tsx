/**
 * Puente de color entre dos secciones contiguas.
 *
 * Se coloca dentro de la sección de destino, pegado al borde que comparte
 * con la anterior: arranca con el color de la sección que viene y se
 * disuelve en la propia.
 *
 * El degradé NO es lineal. Un `linear-gradient(color, transparent)` cambia
 * de pendiente cero a pendiente constante en un solo píxel, y el ojo
 * detecta ese quiebre como una línea aunque no haya salto de color (banda
 * de Mach). Por eso la opacidad sigue una curva smootherstep, que entra y
 * sale con pendiente cero: el degradé no tiene principio ni final visibles.
 */
/**
 * Los canales van en RGB literal y no como var(--token) a propósito: para
 * curvar la opacidad hay que emitir un color por parada, y `color-mix` (o
 * `rgb(from …)`) sobre el token invalidaría el degradé entero en un
 * navegador que no los soporte — justo el corte duro que esto viene a
 * arreglar. Deben coincidir con --bg / --bg-2 / --dark en globals.css.
 */
const COLOR = {
  bg: [236, 225, 204],
  "bg-2": [245, 238, 223],
  dark: [36, 13, 8],
} as const;

/** 6t⁵ − 15t⁴ + 10t³ — vale 0 y 1 en los extremos, con derivada cero en ambos. */
function smootherstep(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function paradas([r, g, b]: readonly [number, number, number], pasos = 12) {
  return Array.from({ length: pasos + 1 }, (_, i) => {
    const t = i / pasos;
    const alfa = 1 - smootherstep(t);
    return `rgba(${r}, ${g}, ${b}, ${alfa.toFixed(3)}) ${(t * 100).toFixed(1)}%`;
  }).join(", ");
}

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
        background: `linear-gradient(${direccion}, ${paradas(COLOR[desde])})`,
      }}
    />
  );
}
