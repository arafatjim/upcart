import { defineField, defineType } from "sanity";

export const brandType = defineType({
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        defineField({ name: 'id', type: 'string' }),
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'slug', type: 'slug', options: { source: 'name' } }),   
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
});