// URL a la que lleva "Comprar": directo a la página del producto en Tienda Nube
// (no al inicio de la tienda). Se puede pisar por env en el deploy.
export const TIENDA_URL =
  process.env.NEXT_PUBLIC_TIENDA_URL ??
  "https://giapura3.mitiendanube.com/productos/pack-1-y-1-l3oxi/";

// Endpoint público del ERP que devuelve el contador de la preventa en vivo.
export const CONTADOR_URL =
  process.env.NEXT_PUBLIC_CONTADOR_URL ??
  "https://giapura-erp.vercel.app/api/public/contador-preventa";

// Monto en pesos a partir del cual el envío es gratis (para el cartel de arriba).
// Cambialo acá, o seteá NEXT_PUBLIC_ENVIO_GRATIS_DESDE en Vercel.
export const ENVIO_GRATIS_DESDE = Number(
  process.env.NEXT_PUBLIC_ENVIO_GRATIS_DESDE ?? "30000"
);

export type ContadorData = {
  vendidos: number;
  objetivo: number;
  inicioAt: string | null;
  finAt: string | null;
  abierta: boolean;
};
