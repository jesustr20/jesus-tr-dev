import {defineField, defineType} from 'sanity'

export const stackType = defineType({
  name: 'stack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Backend', value: 'backend'},
          {title: 'Databases', value: 'databases'},
          {title: 'DevOps', value: 'devops'},
          {title: 'AI/ML', value: 'ai'},
        ],
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologías',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})