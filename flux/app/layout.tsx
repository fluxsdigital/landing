import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Flux — Soluções digitais para PMEs",
  description:
    "Ajudamos pequenas e médias empresas a acelerarem seus processos internos com ferramentas web e mobile sob medida.",
};

function SmoothAnchors() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('click', function(e) {
            var a = e.target.closest('a[href^="#"]');
            if (!a) return;
            var id = a.getAttribute('href');
            if (!id || id === '#') return;
            var el = document.querySelector(id);
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <SmoothAnchors />
        {children}
      </body>
    </html>
  );
}
