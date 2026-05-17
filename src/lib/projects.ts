// src/lib/projects.ts
import { client } from "@/lib/sanity";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  image: string;      // Mantenemos la propiedad por compatibilidad
  imageUrl: string;   // Aquí llegará la URL pública de Supabase desde Sanity
  stack: string[];
  github: string;
  architecture: string;
}

export async function getProjects(): Promise<Project[]> {
  // Consulta GROQ con alias para transformar la estructura de Sanity
  // directamente a la interfaz exacta que tus componentes de React esperan.
  const query = `*[_type == "project"]{
    "id": _id,
    title,
    "subtitle": description,
    challenge,
    "image": imageUrl, // Asignamos la URL a ambas propiedades para evitar cualquier error de renderizado
    imageUrl,
    "stack": tags,
    "github": githubUrl,
    "architecture": liveUrl
  }`;

  try {
    const data = await client.fetch<Project[]>(query);
    return data;
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error);
    return []; // Retornamos un array vacío en caso de error para que la app no explote
  }
}