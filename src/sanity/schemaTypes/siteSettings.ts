import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Used for the main site title',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introImage',
      title: 'Introduction Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The image displayed next to the introduction text on the homepage',
    }),
    defineField({
      name: 'servicesHeroImage',
      title: 'Services Page Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'servicesFullDesignImage',
      title: 'Services Full Design Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The image displayed next to the Full Design description on the Services page',
    }),
    defineField({
      name: 'catalogHeroImage',
      title: 'Catalog Page Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
