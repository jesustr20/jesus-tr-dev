import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
      {/* 16:9 image header */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={project.imageUrl}
          alt={`${project.title} architecture diagram`}
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute left-3 top-3 rounded-md border border-primary/30 bg-background/80 px-2 py-0.5 font-mono text-[10px] text-primary backdrop-blur">
          0{index + 1} / project
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-mono text-xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>
        </div>

        <p className="rounded-md border-l-2 border-primary/50 bg-secondary/50 px-3 py-2 font-mono text-xs leading-relaxed text-muted-foreground">
          <span className="text-primary">// challenge:</span> {project.challenge}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-secondary/70 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <span>{"</>"}</span> GitHub
          </a>
          <a
            href={project.architecture}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs text-primary transition-all hover:bg-primary/20"
          >
            <span>◇</span> Architecture View
          </a>
        </div>
      </div>
    </article>
  );
}
