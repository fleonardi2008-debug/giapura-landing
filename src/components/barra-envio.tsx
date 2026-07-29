import { ENVIO_GRATIS_DESDE } from "@/lib/config";

/**
 * Barra de anuncio fina, fija arriba de todo y siempre visible: envío gratis a
 * partir de cierto monto. El número se configura en `ENVIO_GRATIS_DESDE`.
 */
export function BarraEnvio() {
  return (
    <div className="fixed inset-x-0 top-0 z-[75] flex h-9 items-center justify-center bg-dark px-4 text-center">
      <p className="text-[11px] font-medium tracking-wide text-paper sm:text-xs">
        <span aria-hidden className="mr-1.5">
          🚚
        </span>
        Envío gratis en compras desde{" "}
        <span className="font-semibold text-gold-bright">
          ${ENVIO_GRATIS_DESDE.toLocaleString("es-AR")}
        </span>
      </p>
    </div>
  );
}
