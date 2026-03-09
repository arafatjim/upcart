
import { defineField, defineType } from "sanity";

export const brandType = defineType({
    name: 'brand',
    title: 'Brand',
    type: 'document',
    icon: () => '🏢',
    fields: [
        defineField({ name: 'id', type: 'string', readOnly: true }),
        defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'slug', type: 'slug', options: { source: 'name' },  validation: (Rule) => Rule.required() }), 
        defineField({ name: 'description', type: 'text', validation: (Rule) => Rule.required() }),
        defineField({ name: 'logo', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),  
    ],
    preview: {
        select: {
            title: 'name',
            media: 'logo',
        },
    },
});