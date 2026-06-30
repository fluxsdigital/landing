import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Footer } from "@/components/sections/footer";
import { WhatsAppWidget } from "@/components/sections/whatsapp-widget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
      </main>
      <Footer />
      <WhatsAppWidget
        phone="5547974002478"
        message="Olá! Vim pelo site da Flux e gostaria de conversar sobre um projeto."
      />
    </>
  );
}
