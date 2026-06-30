"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Workflow, BarChart3, Cog, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Aplicações Web",
    description:
      "Painéis administrativos, portais e plataformas web responsivas e performáticas.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Apps iOS e Android nativos ou cross-platform para sua equipe e clientes.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description:
      "Eliminamos tarefas manuais e integramos sistemas para destravar a operação.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Dados",
    description:
      "Visualizações claras e em tempo real para decisões mais rápidas e seguras.",
  },
  {
    icon: Cog,
    title: "Integrações",
    description:
      "Conectamos ERPs, CRMs, APIs e serviços externos em um fluxo único.",
  },
  {
    icon: ShieldCheck,
    title: "Manutenção & Suporte",
    description:
      "Acompanhamento contínuo, melhorias iterativas e cuidado com a infraestrutura.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative flex min-h-screen w-full snap-start items-center justify-center"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            Serviços
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Tudo o que sua empresa precisa para{" "}
            <span className="text-gradient">ganhar ritmo</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Combinamos estratégia, design e engenharia para construir produtos
            digitais que resolvem problemas reais do seu negócio.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm card-hover"
            >
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 ring-1 ring-border">
                  <s.icon className="h-5 w-5 text-violet-300" />
                </div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
