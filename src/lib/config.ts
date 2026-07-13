// URL a la que lleva "Comprar" (tienda / producto de Tienda Nube).
// Por ahora la tienda demo; se cambia por la real vía env en el deploy.
export const TIENDA_URL =
  process.env.NEXT_PUBLIC_TIENDA_URL ?? "https://giapura3.mitiendanube.com";

// Endpoint público del ERP que devuelve el contador de la preventa en vivo.
export const CONTADOR_URL =
  process.env.NEXT_PUBLIC_CONTADOR_URL ??
  "https://giapura-erp.vercel.app/api/public/contador-preventa";

export type ContadorData = {
  vendidos: number;
  objetivo: number;
  inicioAt: string | null;
  finAt: string | null;
  abierta: boolean;
};
