import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import { Badge } from "@/components/ui/badge";

const stackCategories = [
  { key: "backend" as const, label: "Backend", icon: ">" },
  { key: "databases" as const, label: "Databases", icon: "db" },
  { key: "devops" as const, label: "DevOps", icon: "#" },
  { key: "ai" as const, label: "AI/ML", icon: "λ" },
];

interface StackMap {
  backend: string[];
  databases: string[];
  devops: string[];
  ai: string[];
}

export function Stack() {
  const [stackData, setStackData] = useState<StackMap | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "stack"]{category, technologies}`;

    client
      .fetch(query)
      .then((data) => {
        // Inicializamos el objeto vacío mapeando las categorías
        const initialMap: StackMap = { backend: [], databases: [], devops: [], ai: [] };
        
        const formatted = data.reduce((acc: StackMap, item: any) => {
          if (item.category && item.technologies) {
            acc[item.category as keyof StackMap] = item.technologies;
          }
          return acc;
        }, initialMap);

        setStackData(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener el stack de Sanity:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-24 font-mono text-xs text-muted-foreground">
        $ cat ./loading_stack.sh...
      </div>
    );
  }

  return (
    <section id="stack" className="py-24 bg-black/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Encabezado estilo Terminal */}
        <div className="space-y-4 mb-16">
          <div className="text-sm font-mono flex items-center gap-2">
            <span className="text-[#00f5d4]">$</span> 
            <span className="text-zinc-500">cat ./tech-stack.md</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Tech Stack
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            The tools and technologies I use to build robust, scalable systems.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackCategories.map((category) => (
            <div
              key={category.key}
              className="glass rounded-2xl p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-mono text-lg">
                  {category.icon}
                </span>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {category.label}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {stackData && stackData[category.key]?.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}