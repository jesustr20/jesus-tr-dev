import { useEffect, useState } from "react";

const LINES = [
  "$ ssh jesustr@prod-cluster",
  "→ authenticating with ed25519 key...",
  "✓ session established · region=eu-west-1",
  "$ kubectl get pods -n api",
  "NAME                READY   STATUS    RESTARTS",
  "api-gateway-7f9c    3/3     Running   0",
  "worker-celery-2d4   2/2     Running   0",
  "$ docker compose up -d --scale worker=8",
  "✓ 8 workers online · throughput 12.4k req/s",
  "$ git commit -m 'refactor: extract domain port'",
  "$ pytest --cov=src",
  "============== 248 passed in 3.42s ==============",
  "$ terraform apply -auto-approve",
  "✓ infrastructure converged",
  "$ _",
];

export function TerminalBackground() {
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setVisible((prev) => {
        const next = [...prev, LINES[i % LINES.length]];
        return next.length > 14 ? next.slice(next.length - 14) : next;
      });
      i++;
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    >
      <div className="font-mono text-xs leading-6 text-primary p-8 whitespace-pre">
        {visible.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
