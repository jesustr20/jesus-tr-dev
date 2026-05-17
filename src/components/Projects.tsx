import { useEffect, useState } from "react";
import {client} from "@/lib/sanity";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    //GROQ Query con aliases para que coincida exactamten con tu interfaz original
    const query = `*[_type == "project"]{
    "id": _id,
    title,
    "subtitle": description,
    challenge,
    "image": imageUrl,
    "stack": tags,
    "github": githubUrl,
    "architecture": liveUrl
    }`

    client
      .fetch(query)
      .then((data) =>{
        setProjects(data);
        setLoading(false);
      })
      .catch((err) =>{
        console.error("Error al obtener proyectos de Sanity:", err);
        setLoading(false);
      })
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
