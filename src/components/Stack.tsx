const GROUPS = [
  {
    label: "backend",
    items: ["Python", "Django", "FastAPI", "Node.js", "TypeScript", "Go"],
  },
  {
    label: "devops",
    items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS", "Linux"],
  },
  {
    label: "data",
    items: ["PostgreSQL", "Redis", "Kafka", "MongoDB", "Celery", "Vector DB"],
  },
  {
    label: "patterns",
    items: ["Hexagonal", "DDD", "Event-driven", "TDD", "Clean Architecture", "REST/gRPC"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-12">
          <span className="font-mono text-xs text-primary">// 03 — toolkit</span>
          <h2 className="mt-2 font-mono text-3xl font-bold sm:text-4xl">
            <span className="text-muted-foreground">$ cat </span>
            stack.yaml
          </h2>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g) => (
            <div
              key={g.label}
              className="glass rounded-xl p-5 transition-all hover:border-primary/30"
            >
              <div className="mb-4 flex items-center justify-between font-mono text-xs">
                <span className="text-primary">{g.label}:</span>
                <span className="text-muted-foreground">{g.items.length}</span>
              </div>
              <ul className="space-y-1.5 font-mono text-sm">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-foreground/90">
                    <span className="text-primary/60">-</span> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
