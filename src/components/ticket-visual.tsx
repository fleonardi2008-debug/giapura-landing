"use client";

import Image from "next/image";
import { motion } from "motion/react";

// Ticket de Fundador — la pieza física real (foil dorado), no un mock.
export function TicketVisual() {
  return (
    <div className="group relative mx-auto w-full max-w-lg [perspective:1200px]">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_70px_-20px_rgba(109,41,0,0.6)] ring-1 ring-[#f5cf89]/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:shadow-[0_45px_90px_-24px_rgba(109,41,0,0.75)] group-hover:[transform:rotateX(6deg)]">
        <Image
          src="/ticket-fundador.webp"
          alt="Ticket de Fundador Giapura"
          width={1200}
          height={600}
          className="h-auto w-full"
        />
        {/* Brillo que barre una vez cuando el ticket entra en pantalla */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ x: "-130%" }}
          whileInView={{ x: "130%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
