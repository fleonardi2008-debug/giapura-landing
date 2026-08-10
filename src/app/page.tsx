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
import { BotonWhatsapp } from "@/components/boton-whatsapp";
// Newsletter: pendiente hasta tener el costo real del producto y poder
// ofrecer algo mejor que "enterate primero" (el copy actual no aplica a
// gente que nunca compró). Componente listo en @/components/newsletter,
// solo falta reincorporarlo acá cuando esté definido el incentivo.

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
      <BotonWhatsapp />
    </main>
  );
}
