
import { max } from "date-fns";
import { icons, Subtitles } from "lucide-react";
import { defineField, validation } from "sanity";

export const productType = {
    name: 'product',
    title: 'Product ',
    type: 'document',
    icons: () => '📦',
    validation: (Rule: any) => Rule.required().max(500),
    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: (Rule: any) => Rule.required().max(100),
        }),
        defineField({
            name: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: any) => Rule.required().max(500),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule: any) => Rule.required().positive(),
        }),
        defineField({
            name: 'discount',
            title: 'Discount (%)',
            type: 'number',
            validation: (Rule: any) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            validation: (Rule: any) => Rule.required().min(1),
        }),
        defineField({
            name: 'brand',
            title: 'Brand',
            type: 'reference',
            to: { type: 'brand' }
        }),
        defineField({
            name: 'stock',
            title: 'Stock Quantity',
            type: 'number',
            validation: (Rule: any) => Rule.required().integer().min(0), 
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {  
                list: [
                    { title: 'In Stock', value: 'in_stock' },
                    { title: 'Out of Stock', value: 'out_of_stock' },
                    { title: 'Discontinued', value: 'discontinued' },
                    { title: 'Pre-order', value: 'pre_order' },
                    { title: 'New', value: 'new' },
                    {title: 'Hot-Deal', value: 'hot_deal'},
                    { title: 'Limited Edition', value: 'limited_edition' },
                    { title: 'Best Seller', value: 'best_seller' },
                    {title: 'Sale', value: 'sale'},
                ],
            },
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name:'productType',
            title: 'Product Type',
            type: 'string',
            options: {
                list: [
                    {  title:'Gadgets', value:'gadgets'},
                    {  title:'Accessories', value:'accessories'},
                    {  title:'Mobile Phones', value:'mobile-phones'},
                    {  title:'Laptops', value:'laptops'},
                    {  title:'Appliances', value:'appliance'},
                    {  title:'Home Appliances', value:'home-appliances'},
                    {  title:'Office Equipment', value:'office-equipment'},
                    {  title:'Computer Accessories', value:'computer-accessories'},
                    {  title:'Printers & Copiers', value:'printers-and-copiers'},
                    {  title:'Networking Devices', value:'networking-devices'},
                ],
            },
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured Product',
            type: 'boolean',
            description: 'Mark as featured to highlight this product on the homepage.',
            initialValue: false,
            validation: (Rule: any) => Rule.required(),
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
            const Image = media && media[0] ? media[0].asset : null;
            return {
                title: title,
                Subtitle: `$${Subtitle}`,
                media: Image,

            };
        }
    },
};