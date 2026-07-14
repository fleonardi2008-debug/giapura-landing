/**
 * Manchas de color difusas que derivan lento detrás de una sección.
 * `tone` ajusta los colores para fondos claros u oscuros.
 */
export function Aurora({ tone = "light" }: { tone?: "light" | "dark" }) {
  const a = tone === "dark" ? "bg-gold-bright/20" : "bg-gold/15";
  const b = tone === "dark" ? "bg-[#80613b]/25" : "bg-gold-bright/25";

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className={`animate-aurora absolute -left-24 top-0 h-96 w-96 rounded-full ${a} blur-[120px]`}
      />
      <div
        className={`animate-aurora-2 absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full ${b} blur-[130px]`}
      />
    </div>
  );
}
