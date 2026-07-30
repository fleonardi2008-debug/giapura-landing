"use client";

import { useEffect, useState } from "react";
import { CONTADOR_URL, type ContadorData } from "@/lib/config";

/**
 * Datos simulados para previsualizar cada fase agregando `?preview=<fase>` a la URL.
 * Solo es una ayuda visual del lado del cliente; no toca datos reales.
 * Ej: /?preview=recurrente , /?preview=activo , /?preview=proximamente , /?preview=agotado
 */
function datosPreview(modo: string): ContadorData | null {
  const dia = 86_400_000;
  const ahora = Date.now();
  const iso = (ms: number) => new Date(ms).toISOString();
  switch (modo) {
    case "pendiente":
      return { vendidos: 0, objetivo: 1000, inicioAt: null, finAt: null, abierta: true };
    case "proximamente":
      return {
        vendidos: 0,
        objetivo: 1000,
        inicioAt: iso(ahora + 34 * dia),
        finAt: iso(ahora + 35 * dia),
        abierta: false,
      };
    case "activo":
      return {
        vendidos: 640,
        objetivo: 1000,
        inicioAt: iso(ahora - 3_600_000),
        finAt: iso(ahora + 20 * 3_600_000),
        abierta: true,
      };
    case "agotado":
      return {
        vendidos: 1000,
        objetivo: 1000,
        inicioAt: iso(ahora - 3_600_000),
        finAt: iso(ahora + 20 * 3_600_000),
        abierta: true,
      };
    case "recurrente":
      return {
        vendidos: 1000,
        objetivo: 1000,
        inicioAt: iso(ahora - 2 * dia),
        finAt: iso(ahora - 1 * dia),
        abierta: false,
      };
    default:
      return null;
  }
}

/** Hace polling al endpoint público del ERP cada 10s para el contador en vivo. */
export function useContador() {
  const [data, setData] = useState<ContadorData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let activo = true;

    // Preview por URL (?preview=recurrente, etc.): mostramos datos simulados y no consultamos el ERP.
    const modo =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("preview")
        : null;
    if (modo) {
      const fake = datosPreview(modo);
      if (fake) {
        setData(fake);
        return;
      }
    }

    async function fetchData() {
      try {
        const res = await fetch(CONTADOR_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("bad status");
        const json = (await res.json()) as ContadorData;
        if (activo) {
          setData(json);
          setError(false);
        }
      } catch {
        if (activo) setError(true);
      }
    }

    fetchData();
    const id = setInterval(fetchData, 10_000);
    return () => {
      activo = false;
      clearInterval(id);
    };
  }, []);

  return { data, error };
}
