
import { defineField, defineType } from "sanity";

export const brandType = defineType({
    name: 'brand',
    title: 'Brand',
    type: 'document',
    icon: () => '🏢',
    fields: [
        defineField({ name: 'id', type: 'string', }),
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'slug', type: 'slug', options: { source: 'name' } }), 
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'logo', type: 'image', options: { hotspot: true } }),  
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
});