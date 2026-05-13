const CHANNELS = [
  { label: "email", value: "hello@jesustr.dev", href: "mailto:hello@jesustr.dev" },
  { label: "github", value: "@jesustr", href: "https://github.com/jesustr" },
  { label: "linkedin", value: "in/jesustr", href: "https://linkedin.com/in/jesustr" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28">
      <header className="mb-10">
        <span className="font-mono text-xs text-primary">// 04 — get in touch</span>
        <h2 className="mt-2 font-mono text-3xl font-bold sm:text-4xl">
          <span className="text-muted-foreground">$ curl </span>
          /contact
        </h2>
      </header>

      <div className="glass rounded-2xl p-8 shadow-card">
        <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-muted-foreground">
{`{
  "status": 200,
  "open_to": ["backend roles", "devops consulting", "architecture review"],
  "response_time": "< 24h",
  "channels": [`}
        </pre>
        <ul className="mt-2 space-y-2 pl-8 font-mono text-sm">
          {CHANNELS.map((c) => (
            <li key={c.label} className="flex flex-wrap items-center gap-2">
              <span className="text-primary">{c.label}:</span>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {c.value}
              </a>
            </li>
          ))}
        </ul>
        <pre className="font-mono text-sm text-muted-foreground">{`  ]
}`}</pre>
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-center font-mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> echo &quot;built with care · © {new Date().getFullYear()} Jesus TR&quot;
      </footer>
    </section>
  );
}
