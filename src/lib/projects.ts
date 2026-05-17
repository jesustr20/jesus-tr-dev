// src/lib/projects.ts
import { client } from "@/lib/sanity";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  image: string;        // Se mapea con la URL de Supabase
  stack: string[];      // Array de tecnologías
  github: string;       // URL del repositorio
  architecture?: string; // Opcional, por si una API pura no lo requiere
}

export async function getProjects(): Promise<Project[]> {
  // Aquí ocurre la magia de GROQ: renombramos los campos reales de Sanity 
  // para que encajen con los nombres que TypeScript y tus componentes esperan.
  const query = `*[_type == "project"]{
    "id": _id,
    title,
    "subtitle": description,
    challenge,
    "image": imageUrl,
    "stack": tags,
    "github": githubUrl,
    "architecture": liveUrl
  }`;

  try {
    const data = await client.fetch<Project[]>(query);
    return data;
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error);
    return [];
  }
}