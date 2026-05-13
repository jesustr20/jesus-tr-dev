import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jesus TR — Backend & DevOps Engineer" },
      {
        name: "description",
        content:
          "Backend & DevOps focused Full Stack Developer. Scalable architectures, clean code, and maintainable systems.",
      },
      { property: "og:title", content: "Jesus TR — Backend & DevOps Engineer" },
      {
        property: "og:description",
        content: "Scalable architectures and clean code, focused on evolution and maintainability.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}
