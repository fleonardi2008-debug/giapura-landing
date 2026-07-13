"use client";

import { motion } from "motion/react";
import { useContador } from "@/lib/useContador";

function formatNumero(n: number) {
  return n.toLocaleString("es-AR");
}

export function ContadorVivo() {
  const { data } = useContador();

  const vendidos = data?.vendidos ?? 0;
  const objetivo = data?.objetivo ?? 1500;
  const pct = Math.min(100, (vendidos / objetivo) * 100);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-2 flex items-end justify-between">
        <span className="font-display text-3xl font-semibold text-gradient-gold sm:text-4xl">
          {formatNumero(vendidos)}
        </span>
        <span className="text-sm text-cream-dim">
          / {formatNumero(objetivo)} packs vendidos
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-bg-3 ring-1 ring-line">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-bright"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        <span className="text-xs uppercase tracking-widest text-muted">En vivo</span>
      </div>
    </div>
  );
}
