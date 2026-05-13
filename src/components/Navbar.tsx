import { useEffect, useState } from "react";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="text-primary">~/</span>
          <span className="text-foreground">jesus-tr</span>
          <span className="text-primary">.dev</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-primary/70">$ </span>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary transition-all hover:bg-primary/20 hover:shadow-glow"
        >
          ./connect
        </a>
      </nav>
    </header>
  );
}
