// Decoupled data source. Swap this with a Sanity.io fetch later
// (e.g. `await sanityClient.fetch(groq`*[_type == "project"]`)`)
// without touching components.
import projectsData from "@/data/projects.json";
import foodApi from "@/assets/project-food-api.jpg";
import aiStore from "@/assets/project-ai-store.jpg";
import bookstore from "@/assets/project-bookstore.jpg";

const imageMap: Record<string, string> = {
  "food-api": foodApi,
  "ai-store": aiStore,
  bookstore: bookstore,
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  image: string;
  imageUrl: string;
  stack: string[];
  github: string;
  architecture: string;
}

export async function getProjects(): Promise<Project[]> {
  return projectsData.map((p) => ({
    ...p,
    imageUrl: imageMap[p.image] ?? "",
  }));
}
