import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-custom flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500">
            <span className="text-xs font-bold text-white">F</span>
          </div>
          <span className="text-sm font-semibold">Flux</span>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Flux. Acelerando o crescimento digital
          de PMEs.
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/fluxsdigital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/fluxbr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com/flux.software"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
