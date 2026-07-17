import Image from "next/image";

/** Logo real de Giapura (marrón sobre transparente). */
export function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="Giapura"
      width={1219}
      height={422}
      priority={priority}
      className={className}
    />
  );
}
