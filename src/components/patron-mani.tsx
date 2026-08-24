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
 * ── Continuidad entre secciones ──
 * Como el tile es seamless, su borde inferior empalma con su borde superior.
 * Anclando el patrón de la sección de arriba a `bottom` y el de la de abajo a
 * `top`, ambas cortan sobre la misma junta del tile: un maní partido por el
 * límite sigue del otro lado, en vez de reiniciarse. Lo único que cambia al
 * cruzar es el color, y ese cambio se hace con dos capas encimadas que se
 * funden (ver `cruceSale` / `cruceEntra`) siguiendo al degradé del fondo.
 */
const FUENTE = {
  marron: "/patron-mani-marron.webp",
  crema: "/patron-mani-crema.webp",
} as const;

/**
 * Las máscaras en px están calibradas contra la altura del PuenteColor de la
 * sección: el maní tiene que cambiar de color al mismo ritmo que el fondo.
 */
const MASCARA = {
  /** Sección clara: el patrón crece hacia abajo y llega entero al límite. */
  abajo:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 34%, #000 78%, #000 100%)",
  /** Capa que viene de la sección anterior y se apaga ya cruzado el límite. */
  cruceSale: "linear-gradient(to bottom, #000 0px, rgba(0,0,0,0.8) 95px, transparent 215px)",
  /**
   * Capa propia de la sección oscura: entra por arriba a medida que oscurece
   * y vuelve a salir por abajo cuando aclara, con los mismos tiempos.
   */
  cruceEntra:
    "linear-gradient(to bottom, transparent 0px, rgba(0,0,0,0.22) 115px, #000 235px, #000 calc(100% - 235px), rgba(0,0,0,0.22) calc(100% - 115px), transparent 100%)",
  /** Espejo de `cruceSale` para el borde de abajo: aparece al final. */
  salidaEntra: "linear-gradient(to top, #000 0px, rgba(0,0,0,0.8) 95px, transparent 215px)",
  ambos:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 18%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.5) 82%, transparent 100%)",
} as const;

export function PatronMani({
  variante,
  borde = "ambos",
  anclaje = "top",
  opacidad = 0.16,
  tamano = 460,
}: {
  variante: keyof typeof FUENTE;
  borde?: keyof typeof MASCARA;
  /**
   * Junta del tile sobre la que se alinea el patrón. Para que las formas
   * crucen un límite, la sección de arriba usa "bottom" y la de abajo "top".
   */
  anclaje?: "top" | "bottom";
  /** Muy baja a propósito: es una textura, no un elemento de contenido. */
  opacidad?: number;
  /** Ancho del tile en px; más chico = maníes más chicos y más repetidos. */
  tamano?: number;
}) {
  return (
    <div
      aria-hidden
      /* z-[2]: por encima del PuenteColor (z-[1]), si no el degradé tapa
         justo los maníes del cruce. El contenido va en z-10. */
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      style={{ opacity: opacidad }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${FUENTE[variante]})`,
          backgroundRepeat: "repeat",
          backgroundSize: `${tamano}px auto`,
          backgroundPosition: `left ${anclaje}`,
          maskImage: MASCARA[borde],
          WebkitMaskImage: MASCARA[borde],
        }}
      />
    </div>
  );
}
