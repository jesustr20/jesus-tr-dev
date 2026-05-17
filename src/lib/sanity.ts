import { createClient } from '@sanity/client'

const env = (import.meta as any).env

export const client =createClient({
   projectId: env.VITE_SANITY_PROJECT_ID,
  dataset: env.VITE_SANITY_DATASET,
  // Convertimos el texto "false" a un booleano real de JavaScript
  useCdn: env.VITE_SANITY_USECDN === 'true', 
  apiVersion: env.VITE_SANITY_APIVERSION,
})