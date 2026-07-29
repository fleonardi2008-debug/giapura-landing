"use client";

import { useContador } from "@/lib/useContador";

/**
 * Barra de progreso en vivo de los Fundadores (los primeros N que compran en las
 * 24hs quedan como fundadores). Lee el contador público del ERP (vendidos / objetivo).
 * La venta sigue abierta por tiempo; lo que se agota a los `objetivo` es el cupo de
 * fundadores.
 */
export function BarraTickets({ className = "" }: { className?: string }) {
  const { data } = useContador();

  // Esqueleto mientras carga
  if (!data) {
    return (
      <div className={`mx-auto max-w-md ${className}`}>
        <div className="h-3 w-full animate-pulse rounded-full bg-bg-3 ring-1 ring-line" />
      </div>
    );
  }

  const { vendidos, objetivo, inicioAt, finAt, abierta } = data;
  const now = Date.now();
  const inicioMs = inicioAt ? new Date(inicioAt).getTime() : null;

  const pendiente = finAt === null; // fechas no cargadas
  const proximamente = !pendiente && inicioMs !== null && now < inicioMs;
  const agotado = !pendiente && !proximamente && vendidos >= objetivo;
  const cerrada = !pendiente && !proximamente && !agotado && !abierta;
  const vivo = !pendiente && !proximamente && !agotado && abierta;

  const restantes = Math.max(0, objetivo - vendidos);
  const pct = Math.min(100, objetivo > 0 ? (vendidos / objetivo) * 100 : 0);
  const vacia = pendiente || proximamente;

  const fechaInicio = inicioAt
    ? new Date(inicioAt).toLocaleString("es-AR", {
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "";

  return (
    <div className={`mx-auto max-w-md text-left ${className}`}>
      {/* Encabezado: label + contador */}
      <div className="flex items-end justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-medium text-cream-dim">
          {vivo && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
          )}
          Fundadores
        </span>
        <span className="font-display text-lg font-semibold tabular-nums text-cream">
          {vendidos.toLocaleString("es-AR")}
          <span className="text-muted"> / {objetivo.toLocaleString("es-AR")}</span>
        </span>
      </div>

      {/* Barra */}
      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-bg-3 ring-1 ring-line">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: `${vacia ? 0 : pct}%`,
            background: agotado
              ? "linear-gradient(90deg, #8a755c, #5a3a28)"
              : "linear-gradient(90deg, #f5cf89, #c98a3c 55%, #6d2900)",
          }}
        />
      </div>

      {/* Mensaje contextual */}
      <p className="mt-3 text-sm">
        {pendiente ? (
          <span className="text-muted">La preventa arranca muy pronto.</span>
        ) : proximamente ? (
          <span className="text-cream-dim">
            Arranca el <span className="font-medium text-cream">{fechaInicio} hs</span>.
          </span>
        ) : cerrada ? (
          <span className="text-cream-dim">La preventa cerró.</span>
        ) : agotado ? (
          <span className="font-medium text-cream-dim">
            Ya son {objetivo.toLocaleString("es-AR")} fundadores. Se completó el cupo.
          </span>
        ) : (
          <span className="text-cream-dim">
            Quedan{" "}
            <span className="font-semibold text-gold">
              {restantes.toLocaleString("es-AR")} lugares
            </span>
            . Todavía estás a tiempo.
          </span>
        )}
      </p>
    </div>
  );
}
