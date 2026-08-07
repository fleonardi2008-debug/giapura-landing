import { BarraEnvio } from "@/components/barra-envio";
import { BarraFija } from "@/components/barra-fija";
import { Intro } from "@/components/intro";
import { Comprar } from "@/components/comprar";
import { TicketFundador } from "@/components/ticket-fundador";
import { SoloLanzamiento } from "@/components/solo-lanzamiento";
import { Testimonios } from "@/components/testimonios";
import { Faq } from "@/components/faq";
import { Cobertura } from "@/components/cobertura";
import { Gracias } from "@/components/gracias";

export default function Home() {
  return (
    <main>
      <BarraEnvio />
      <BarraFija />
      <Intro />
      <Comprar />
      <SoloLanzamiento>
        <TicketFundador />
      </SoloLanzamiento>
      <Testimonios />
      <Faq />
      <Cobertura />
      <Gracias />
    </main>
  );
}
