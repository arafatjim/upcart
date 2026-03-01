import {TagIcon, } from '@sanity/icons'
import { Subtitles } from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'range',
      type:'string',
      description: 'The range of the category (e.g., price range, age range, etc.)',
    validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      type:'boolean',
      initialValue: false,
      description: 'Indicates whether this category is featured on the homepage.',
    validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type:'image',
      options: {
        hotspot: true,
      },
    validation: (Rule) => Rule.required(),
    })
  ],
  preview:{
    select:{
      title:'title',
      Subtitles:'description',
      media:'image'
    },
  }
})
