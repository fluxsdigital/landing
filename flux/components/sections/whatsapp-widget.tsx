"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.42-1.318.13-.39.13-.745.13-1.146 0-.4-.057-.687-.286-.945-.215-.244-.616-.402-1.06-.402zM16.001 5.333c-5.891 0-10.668 4.776-10.668 10.668 0 1.886.5 3.717 1.444 5.333l-1.55 5.665 5.804-1.52a10.62 10.62 0 0 0 4.97 1.224h.005c5.89 0 10.665-4.776 10.665-10.668 0-2.85-1.11-5.527-3.124-7.54-2.014-2.014-4.69-3.124-7.541-3.162h-.005zm0 19.388h-.004a8.745 8.745 0 0 1-4.45-1.221l-.32-.19-3.444.902.92-3.357-.21-.335a8.74 8.74 0 0 1-1.34-4.62c0-4.832 3.927-8.762 8.764-8.762 2.34 0 4.54.913 6.195 2.568a8.7 8.7 0 0 1 2.567 6.198c0 4.832-3.927 8.762-8.762 8.762z" />
    </svg>
  );
}

type Props = {
  phone?: string;
  message?: string;
};

export function WhatsAppWidget({
  phone,
  message,
}: Props) {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 1500);
    const t2 = setTimeout(() => setShowHint(false), 7000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const href = whatsappUrl(phone, message);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[300px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Flux</p>
                  <p className="text-[11px] text-white/80">
                    Resposta rápida no WhatsApp
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm text-foreground/90">
                Olá! 👋 Como podemos ajudar a transformar o seu processo hoje?
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#1ebe5b] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Iniciar conversa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center gap-3">
        <AnimatePresence>
          {showHint && !open && (
            <motion.div
              key="hint"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="hidden rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs text-foreground shadow-lg backdrop-blur-md sm:block"
            >
              Fale com a gente ✨
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label={open ? "Fechar WhatsApp" : "Abrir WhatsApp"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-shadow hover:shadow-[0_8px_40px_rgba(37,211,102,0.7)]"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping" />
          <span className="relative">
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </span>
        </motion.button>
      </div>
    </div>
  );
}
