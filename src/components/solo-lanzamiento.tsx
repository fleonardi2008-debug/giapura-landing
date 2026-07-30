"use client";

import type { ReactNode } from "react";
import { useFase } from "@/lib/useFase";

/**
 * Muestra su contenido durante todo el lanzamiento (carga, pendiente, próximamente
 * y activo) y lo OCULTA una vez que pasa la ventana (fase "recurrente"). Sirve para
 * secciones que solo tienen sentido durante el lanzamiento, como el Ticket de Fundador.
 */
export function SoloLanzamiento({ children }: { children: ReactNode }) {
  const fase = useFase();
  if (fase === "recurrente") return null;
  return <>{children}</>;
}
