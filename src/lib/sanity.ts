import { createClient } from '@sanity/client'

const env = (import.meta as any).env

export const client = createClient({
  projectId: 'ulf3yzf6', 
  dataset: 'production',
  useCdn: false, 
  apiVersion: '2026-05-17',
})