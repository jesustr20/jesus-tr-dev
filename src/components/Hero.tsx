import { TerminalBackground } from "./TerminalBackground";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <TerminalBackground />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-24">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
          <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-glow" />
          available for backend & devops engagements
        </div>

        <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <span className="text-muted-foreground">&gt; </span>
          Jesus TR
          <span className="text-primary">.</span>
        </h1>
        <p className="mt-3 font-mono text-xl text-muted-foreground sm:text-2xl">
          <span className="gradient-text">Backend & DevOps</span> Engineer
          <span className="text-primary"> · </span>
          Full Stack
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Developing <span className="text-foreground">scalable architectures</span> and{" "}
          <span className="text-foreground">clean code</span>, focused on evolution and
          maintainability.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-glow"
          >
            <span>cat ./projects</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            ./contact --me
          </a>
        </div>

        <div className="mt-16 font-mono text-xs text-muted-foreground terminal-cursor">
          <span className="text-primary">$</span> whoami
        </div>
      </div>
    </section>
  );
}
