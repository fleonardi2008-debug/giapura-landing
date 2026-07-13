"use client";

import { useEffect, useState } from "react";
import { CONTADOR_URL, type ContadorData } from "@/lib/config";

/** Hace polling al endpoint público del ERP cada 10s para el contador en vivo. */
export function useContador() {
  const [data, setData] = useState<ContadorData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let activo = true;

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
