"use client";

import { useEffect, useState } from "react";
import { useContador } from "@/lib/useContador";

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const { data } = useContador();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const finAt = data?.finAt ?? null;
  if (!finAt) {
    return <p className="text-sm text-muted">Preparando el lanzamiento…</p>;
  }

  const ms = new Date(finAt).getTime() - now;

  if (ms <= 0 || !data?.abierta) {
    return <p className="text-sm font-medium text-cream-dim">La preventa cerró.</p>;
  }

  const horas = Math.floor(ms / 3_600_000);
  const min = Math.floor((ms % 3_600_000) / 60_000);
  const seg = Math.floor((ms % 60_000) / 1000);

  return (
    <p className="text-sm text-cream-dim">
      Quedan{" "}
      <span className="font-display font-semibold text-gold tabular-nums">
        {pad(horas)}:{pad(min)}:{pad(seg)}
      </span>{" "}
      horas
    </p>
  );
}
