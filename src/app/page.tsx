import { Intro } from "@/components/intro";
import { Hero } from "@/components/hero";
import { TicketFundador } from "@/components/ticket-fundador";
import { Producto } from "@/components/producto";
import { Cobertura } from "@/components/cobertura";
import { Testimonios } from "@/components/testimonios";
import { Faq } from "@/components/faq";
import { Contacto } from "@/components/contacto";

export default function Home() {
  return (
    <main>
      <Intro />
      <Hero />
      <TicketFundador />
      <Producto />
      <Cobertura />
      <Testimonios />
      <Faq />
      <Contacto />
    </main>
  );
}
