import { max } from "date-fns";
import { icons, Subtitles } from "lucide-react";
import { defineField, validation } from "sanity";
export const productType = {
    name: 'product',
    title: 'Product Type',
    type: 'document',
    validation: (Rule: any) => Rule.required(),   
    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'specifications',
            title:'Specifications',
            type:'array',
            of:[{
                type:'object',
                fields:[
                    defineField({
                        name:'key',
                        title:'Key',
                        type:'string',
                        validation:(Rule) => Rule.required(),
                    }),
                    defineField({
                        name:'value',
                        title:'Value',
                        type:'string',
                        validation:(Rule) => Rule.required(),
                    }),
                ],
            }],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required().max(50000),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
        }),
        defineField({
        name: 'productType',
        title: 'Product Type',
        type: 'string',
        options: {
            list: [
            { title: 'Gadgets', value: 'gadget' },
            { title: 'Accessory', value: 'accessory' },
            { title: 'Home Appliance', value: 'home_appliance' },
            { title: 'Electronics', value: 'electronics' },
            { title: 'Footwear', value: 'footwear' },
            { title: 'Clothing', value: 'clothing' },
            { title: 'Books', value: 'books' },
            { title: 'Toys', value: 'toys' },
            { title: 'Sports Equipment', value: 'sports_equipment' },
            { title: 'Beauty Products', value: 'beauty_products' },
            { title: 'Health Products', value: 'health_products' },
            { title: 'Automotive', value: 'automotive' },
            { title: 'Others', value: 'other' },
            ],
        },
        validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule) => Rule.required(),
        }),
       defineField({
        name: 'brand',
        title: 'Brand',
        type: 'reference',
        to: [{ type: 'brand' }],
        validation: (Rule) => Rule.required(),
         }),
          defineField({
             name: 'releaseDate',
             title: 'Release Date',
             type: 'date',
             validation: (Rule) => Rule.required().max(new Date().toISOString().split('T')[0]),
         }),
        defineField({
            name: 'discount',
            title: 'Discount Percentage',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(100),
        }),
         defineField({
            name: 'stock',
            title: 'Stock Quantity',
            type: 'number',
            validation: (Rule) => Rule.required().integer().min(0),
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    {title: 'sale', value: 'sale_product'},
                    { title: 'Available', value: 'available' },
                    { title: 'Out of Stock', value: 'out_of_stock' },
                    { title: 'Pre-order', value: 'pre_order' },
                    { title: 'Discontinued', value: 'discontinued' },
                    {title: 'Limited Edition', value: 'limited_edition' },
                    {title:'Hot Deal', value:'hot_deal'},
                    {title:'Best Seller', value:'best_seller'},
                    { title: 'Discontinued', value: 'discontinued' },

                ],
            },
            validation: (Rule) => Rule.required(),
        }),
            defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.required().min(0).max(5),
        }),
         defineField({
             name: 'reviews',
             title: 'Reviews',   
             type: 'array',
             of: [{
                 type: 'object',
                 fields: [
                     defineField({
                         name: 'reviewer',
                         title: 'Reviewer Name',
                         type: 'string',
                         validation: (Rule) => Rule.required(),
                     }),
                     defineField({
                         name: 'comment',
                         title: 'Comment',
                         type: 'text',
                         validation: (Rule) => Rule.required(),
                     }),
                     defineField({
                         name: 'rating',
                         title: 'Rating',
                         type: 'number',
                         validation: (Rule) => Rule.required().min(0).max(5),
                     }),
                 ],
             }],
         }),
        defineField({
            name: 'featured',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
        title: 'name',
        media: 'image',
        Subtitle: 'price',
},

 prepare(selection: { title: string; media: any[]; Subtitle: number }) {

    const { title, media, Subtitle } = selection;
    return {
        title,
        media: media && media[0] ? media[0] : undefined,
        subtitle: Subtitle ? `TK ${Subtitle.toFixed(2)}` : 'No price',
    };
    },
    },
};
    