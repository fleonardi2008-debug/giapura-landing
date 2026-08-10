// URL a la que lleva "Comprar": directo a la página del producto en Tienda Nube
// (no al inicio de la tienda). Se puede pisar por env en el deploy.
export const TIENDA_URL =
  process.env.NEXT_PUBLIC_TIENDA_URL ??
  "https://giapura3.mitiendanube.com/productos/pack-1-y-1-l3oxi/";

// Endpoint público del ERP que devuelve el contador de la preventa en vivo.
export const CONTADOR_URL =
  process.env.NEXT_PUBLIC_CONTADOR_URL ??
  "https://giapura-erp.vercel.app/api/public/contador-preventa";

// Endpoint público del ERP que guarda los mails del formulario de newsletter.
export const NEWSLETTER_URL =
  process.env.NEXT_PUBLIC_NEWSLETTER_URL ??
  "https://giapura-erp.vercel.app/api/public/newsletter";

// Monto en pesos a partir del cual el envío es gratis (para el cartel de arriba).
// Cambialo acá, o seteá NEXT_PUBLIC_ENVIO_GRATIS_DESDE en Vercel.
export const ENVIO_GRATIS_DESDE = Number(
  process.env.NEXT_PUBLIC_ENVIO_GRATIS_DESDE ?? "30000"
);

// Plazo de entrega que se comunica públicamente. Es mayor al plazo real de
// producción (~40 días hábiles) a propósito: mejor sobrar margen que quedar mal.
export const PLAZO_ENTREGA = "hasta 60 días hábiles";

// Número de WhatsApp para consultas (formato E.164 sin "+", ej: "5493511234567").
// Mientras esté vacío, el botón de WhatsApp no se muestra.
export const WHATSAPP_NUMERO = process.env.NEXT_PUBLIC_WHATSAPP_NUMERO ?? "";

export type ContadorData = {
  vendidos: number;
  objetivo: number;
  inicioAt: string | null;
  finAt: string | null;
  abierta: boolean;
};
