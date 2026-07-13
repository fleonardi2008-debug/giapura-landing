"use client";

import { useEffect, useState } from "react";
import { useContador } from "@/lib/useContador";

const pad = (n: number) => String(n).padStart(2, "0");

function useTiempo() {
  const { data } = useContador();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const finAt = data?.finAt ?? null;
  if (!finAt) return { estado: "pendiente" as const };

  const ms = new Date(finAt).getTime() - now;
  if (ms <= 0 || !data?.abierta) return { estado: "cerrado" as const };

  return {
    estado: "activo" as const,
    horas: Math.floor(ms / 3_600_000),
    min: Math.floor((ms % 3_600_000) / 60_000),
    seg: Math.floor((ms % 60_000) / 1000),
  };
}

/** Versión chica en línea, para debajo de los botones. */
export function Countdown() {
  const t = useTiempo();
  if (t.estado === "pendiente")
    return <p className="text-sm text-muted">Muy pronto.</p>;
  if (t.estado === "cerrado")
    return <p className="text-sm font-medium text-cream-dim">La preventa cerró.</p>;
  return (
    <p className="text-sm text-cream-dim">
      Cierra en{" "}
      <span className="font-display font-semibold text-gold tabular-nums">
        {pad(t.horas)}:{pad(t.min)}:{pad(t.seg)}
      </span>
    </p>
  );
}

/** Versión grande en cajas, para la intro y secciones destacadas. */
export function CountdownGrande() {
  const t = useTiempo();

  if (t.estado === "pendiente") {
    return (
      <span className="text-xs uppercase tracking-[0.4em] text-muted">Muy pronto</span>
    );
  }
  if (t.estado === "cerrado") {
    return (
      <span className="text-xs uppercase tracking-[0.4em] text-muted">
        La preventa cerró
      </span>
    );
  }

  const items = [
    { v: t.horas, l: "horas" },
    { v: t.min, l: "min" },
    { v: t.seg, l: "seg" },
  ];

  return (
    <div className="flex items-start gap-3">
      {items.map((it, i) => (
        <div key={it.l} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-semibold tabular-nums text-cream sm:text-4xl">
              {pad(it.v)}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-widest text-muted">
              {it.l}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className="font-display text-2xl text-gold/50 sm:text-3xl">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
