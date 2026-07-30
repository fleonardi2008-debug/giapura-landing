"use client";

import { useEffect, useState } from "react";
import { useContador } from "@/lib/useContador";

/**
 * Fase del ciclo de vida de la landing, derivada del contador del ERP:
 * - cargando: todavía no llegó el dato.
 * - pendiente: no hay fechas cargadas (pre-lanzamiento sin fecha).
 * - proximamente: hay fecha pero todavía no arrancó.
 * - activo: dentro de la ventana de la preventa.
 * - recurrente: la ventana ya pasó → modo recompra (el QR del frasco cae acá).
 */
export type Fase =
  | "cargando"
  | "pendiente"
  | "proximamente"
  | "activo"
  | "recurrente";

export function useFase(): Fase {
  const { data } = useContador();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!data) return "cargando";
  if (data.finAt === null) return "pendiente";

  const inicioMs = data.inicioAt ? new Date(data.inicioAt).getTime() : null;
  const finMs = new Date(data.finAt).getTime();

  if (inicioMs !== null && now < inicioMs) return "proximamente";
  if (now > finMs) return "recurrente";
  return "activo";
}
