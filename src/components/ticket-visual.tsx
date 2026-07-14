// Ticket de Fundador — pieza de colección. Objeto oscuro (cacao) sobre el fondo
// crema para que resalte y se sienta "físico", como un pasaporte o entrada.
export function TicketVisual({ numero = "000001" }: { numero?: string }) {
  return (
    <div className="group relative mx-auto w-full max-w-md [perspective:1200px]">
      <div className="btn-shine relative flex overflow-hidden rounded-2xl bg-[#3d1b06] text-[#f6f2e7] shadow-[0_30px_70px_-20px_rgba(109,41,0,0.6)] ring-1 ring-[#f5cf89]/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:shadow-[0_45px_90px_-24px_rgba(109,41,0,0.75)] group-hover:[transform:rotateX(6deg)]">
        <span className="shine" aria-hidden />
        {/* textura sutil */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #f5cf89 0, transparent 40%), radial-gradient(circle at 80% 80%, #f5cf89 0, transparent 40%)",
          }}
        />
        {/* cuerpo */}
        <div className="flex-1 p-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#f5cf89]">
            Giapura · Primera tanda nacional
          </p>
          <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-[#f5cf89]">
            Ticket de Fundador
          </h3>
          <p className="mt-6 text-[10px] uppercase tracking-widest text-[#f6f2e7]/50">
            Número de fundador
          </p>
          <p className="font-display text-4xl font-semibold tabular-nums tracking-wider text-[#f6f2e7]">
            N.º {numero}
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-full border border-[#f5cf89]/50 text-center text-sm leading-8 text-[#f5cf89]">
              ★
            </span>
            <span className="text-xs text-[#f6f2e7]/60">Edición irrepetible</span>
          </div>
        </div>

        {/* perforación + talón */}
        <div className="relative flex w-24 flex-col items-center justify-center border-l border-dashed border-[#f5cf89]/30 bg-[#2e1404] p-4 text-center">
          <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-bg" />
          <span
            className="font-display text-xs font-semibold uppercase tracking-widest text-[#f5cf89]"
            style={{ writingMode: "vertical-rl" }}
          >
            Fundador
          </span>
        </div>
      </div>
    </div>
  );
}
