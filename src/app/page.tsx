import { BarraFija } from "@/components/barra-fija";
import { Intro } from "@/components/intro";
import { Comprar } from "@/components/comprar";
import { PorQue } from "@/components/por-que";
import { TicketFundador } from "@/components/ticket-fundador";
import { Testimonios } from "@/components/testimonios";
import { Faq } from "@/components/faq";
import { Cobertura } from "@/components/cobertura";
import { Gracias } from "@/components/gracias";

export default function Home() {
  return (
    <main>
      <BarraFija />
      <Intro />
      <Comprar />
      <PorQue />
      <TicketFundador />
      <Testimonios />
      <Faq />
      <Cobertura />
      <Gracias />
    </main>
  );
}
