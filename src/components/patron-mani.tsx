/**
 * Patrón de maníes de la tapa del frasco, usado como marca de agua de fondo.
 *
 * El tile está armado a partir de las cáscaras sueltas del arte original,
 * por dos motivos:
 *
 * 1. En el arte completo, el 81% de la tinta son los granos rellenos y solo
 *    el 19% las cáscaras de línea. A opacidad de marca de agua se veían los
 *    borrones y no los maníes, así que el patrón usa solo las cáscaras.
 * 2. Repetir el arte espejado dejaba simetrías evidentes (mariposas, "V").
 *    Acá las cáscaras se colocan salteadas con envolvente en los bordes: lo
 *    que sale por un lado entra por el opuesto, así el tile calza de verdad
 *    sin necesidad de espejar.
 *
 * `borde` controla dónde el patrón se ve más denso. Poniéndolo pegado al
 * límite que la sección comparte con su vecina, el dibujo "cruza" la
 * transición y las dos secciones se sienten parte de lo mismo.
 */
const FUENTE = {
  marron: "/patron-mani-marron.webp",
  crema: "/patron-mani-crema.webp",
} as const;

/**
 * Las máscaras se apagan contra el borde compartido, no ahí es donde son más
 * densas. Si el patrón llega a full hasta el corte y del otro lado arranca
 * otro patrón de otro color, esa diferencia de densidad vuelve a dibujar la
 * línea que el degradé de color acaba de borrar. Apagándose a los dos lados,
 * la densidad cruza el límite sin escalón.
 */
const MASCARA = {
  abajo:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 34%, #000 66%, rgba(0,0,0,0.4) 88%, transparent 100%)",
  arriba:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 12%, #000 34%, rgba(0,0,0,0.45) 66%, transparent 100%)",
  ambos:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 18%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.5) 82%, transparent 100%)",
} as const;

export function PatronMani({
  variante,
  borde = "ambos",
  opacidad = 0.16,
  tamano = 460,
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
