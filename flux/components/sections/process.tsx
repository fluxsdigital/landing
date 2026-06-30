"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Mergulhamos no seu negócio, mapeamos processos e identificamos as oportunidades de maior impacto.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Desenho & Construção",
    description:
      "Desenhamos a solução ideal e desenvolvemos em ciclos curtos, com você acompanhando cada entrega.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Entrega & Evolução",
    description:
      "Colocamos no ar, treinamos o time e seguimos iterando com melhorias contínuas baseadas em dados.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative flex min-h-screen w-full snap-start items-center justify-center"
    >
      <div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]"
        aria-hidden
      />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
            Como funciona
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Um processo claro, do{" "}
            <span className="text-gradient">zero ao lançamento</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Sem surpresas, sem jargões. Você sempre sabe onde estamos e o que
            vem a seguir.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div
                  className="absolute top-10 left-full hidden h-px w-full bg-gradient-to-r from-border via-violet-500/40 to-border md:block"
                  aria-hidden
                />
              )}
              <div className="relative rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm card-hover">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 glow-violet">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground/40">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
