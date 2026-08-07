import Image from "next/image";

const VARIANTES = {
  marron: { src: "/logo.png", width: 1219, height: 422 },
  blanco: { src: "/logo-blanco-recortado.png", width: 582, height: 181 },
} as const;

/** Logo real de Giapura. "marron" (default, sobre transparente) o "blanco" (para fondos oscuros/fotos). */
export function Logo({
  className = "",
  priority = false,
  variant = "marron",
}: {
  className?: string;
  priority?: boolean;
  variant?: keyof typeof VARIANTES;
}) {
  const { src, width, height } = VARIANTES[variant];
  return (
    <Image
      src={src}
      alt="Giapura"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
