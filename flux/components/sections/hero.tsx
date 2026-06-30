"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full snap-start items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-fade" aria-hidden />
      <div
        className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute top-40 right-0 h-[300px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            <span className="text-muted-foreground">
              Acelere o crescimento do seu negócio
            </span>
          </div>

          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-[1.05]">
            Transformamos processos em{" "}
            <span className="text-gradient">soluções digitais</span> que escalam
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-muted-foreground md:text-base">
            Ajudamos pequenas e médias empresas a ganharem velocidade com
            ferramentas web e mobile feitas sob medida para a sua operação.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="gradient" size="lg" asChild>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#processo">Como funciona</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-violet-400" />
              Entrega ágil
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Equipe sênior
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Suporte contínuo
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
