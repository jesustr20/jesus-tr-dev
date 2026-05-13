import { useEffect, useState } from "react";
import { getProjects, type Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <header className="mb-12 flex flex-col gap-2">
        <span className="font-mono text-xs text-primary">// 02 — selected work</span>
        <h2 className="font-mono text-3xl font-bold sm:text-4xl">
          <span className="text-muted-foreground">$ ls </span>
          ./projects
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground">
          Backend systems and infrastructure I&apos;ve designed end-to-end. Each card opens
          the architecture decisions and source.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
