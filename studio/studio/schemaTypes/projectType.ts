// studio/studio/schemaTypes/projectType.ts
import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Proyectos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'challenge',
      title: 'Reto Técnico (Challenge)',
      type: 'text',
      description: 'Explica el reto de optimización o patrón que implementaste.',
    }),
    defineField({
      name: 'githubUrl',
      title: 'Enlace de GitHub',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Enlace del Proyecto en Vivo (Deploy)',
      type: 'url',
      description: 'Opcional. Puedes dejarlo vacío si es una API pura.',
    }),
    defineField({
      name: 'imageUrl',
      title: 'URL de la Imagen',
      type: 'url',
      description: 'Puedes pegar un link de Unsplash como los que tenías en tu JSON.',
    }),
    defineField({
      name: 'tags',
      title: 'Tecnologías usadas (Stack)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})