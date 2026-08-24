/**
 * Patrón de maníes de la tapa del frasco, usado como marca de agua de fondo.
 *
 * El tile es un espejado 2×2 del arte original: el arte suelto no calzaba
 * consigo mismo (los bordes opuestos no coinciden), así que espejarlo
 * garantiza repetición sin costuras.
 *
 * `borde` controla dónde el patrón se ve más denso. Poniéndolo pegado al
 * límite que la sección comparte con su vecina, el dibujo "cruza" la
 * transición y las dos secciones se sienten parte de lo mismo.
 */
const FUENTE = {
  marron: "/patron-mani-marron.webp",
  crema: "/patron-mani-crema.webp",
} as const;

const MASCARA = {
  abajo: "linear-gradient(to bottom, transparent 6%, rgba(0,0,0,0.3) 48%, #000 100%)",
  arriba: "linear-gradient(to top, transparent 6%, rgba(0,0,0,0.3) 48%, #000 100%)",
  ambos:
    "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.16) 40%, rgba(0,0,0,0.16) 60%, #000 100%)",
} as const;

export function PatronMani({
  variante,
  borde = "ambos",
  opacidad = 0.08,
  tamano = 360,
}: {
  variante: keyof typeof FUENTE;
  borde?: keyof typeof MASCARA;
  /** Muy baja a propósito: es una textura, no un elemento de contenido. */
  opacidad?: number;
  /** Ancho del tile en px; más chico = maníes más chicos y más repetidos. */
  tamano?: number;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity: opacidad }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${FUENTE[variante]})`,
          backgroundRepeat: "repeat",
          backgroundSize: `${tamano}px auto`,
          maskImage: MASCARA[borde],
          WebkitMaskImage: MASCARA[borde],
        }}
      />
    </div>
  );
}
