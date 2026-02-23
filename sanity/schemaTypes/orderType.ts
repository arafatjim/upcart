import { BasketIcon, Icon } from "@sanity/icons";
import { sub } from "date-fns";
import { de, fi } from "date-fns/locale";
import { Currency } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
       defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule: any) => Rule.required().max(100),
       }),
         defineField({
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
         }),
            defineField({   
                name: 'invoice',
                title: 'Object Invoice',
                type: 'object',
                fields: [
                    {name: 'id', type: 'string'},
                    {name: 'number', type: 'string'},
                    {name: 'hosted_invoice_url', type: 'url'},
                    {name: 'createdAt', type: 'datetime'},
                
                ],
            }),
            defineField({
                name: 'stripeCustomerId',
                title: 'Stripe Customer ID',
                type: 'string',
                validation: (Rule: any) => Rule.required().max(100),       
            }),
            defineField({
                name:'clarkUserId',
                title:'Clark User ID',
                type:'string',
                validation: (Rule: any) => Rule.required().max(100),
            }),
            defineField({
                name: 'customerNameAlt',
                title: 'Customer Name',
                type: 'string',
                validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
                name: 'customerEmail',
                title: 'Customer Email',
                type: 'email',
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: 'stripePaymentIntentId',
                title: 'Stripe Payment Intent ID',
                type: 'string',
                validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
                name:'products',
                title:'Products',
                type:'array',
                of:[
                    defineArrayMember({
                        type:'object',
                        fields:[
                            defineField({
                                name:'productId',
                                title:'Product Bought',
                                type:'reference',
                                to:{type:'product'},
                            }),
                            defineField({
                                name:'quantity',
                                title:'Quantity Purchased',
                                type:'number',
                                validation:(Rule) => Rule.required().integer().min(1),
                            }),
                        ],
                    }),
                ],
            }),
        defineField({
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required().max(3),
        }),
        defineField({
            name: 'amountDiscount',
            title: 'Amount Discount',
            type: 'number',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'address',
            title: 'Shipping Address',
            type: 'object',
            fields: [
                defineField({
                    name: 'street',
                    title: 'Street Address',
                    type: 'string',
                }),
                defineField({
                    name: 'state',
                    title: 'State',
                    type: 'string',
                    validation: (Rule) => Rule.required().max(200),
                }),
                defineField({
                    name: 'zip',
                    title: 'Zip Code',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                }),
                defineField({
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                    validation: (Rule) => Rule.required().max(200),
                }),
                defineField({
                    name: 'city',
                    title: 'City',
                    type: 'string',
                    validation: (Rule) => Rule.required().max(200),
                }),
            ],
        }),
        defineField({
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Cancelled', value: 'cancelled' },
                    { title: 'Refunded', value: 'refunded' },
                    { title: 'Processing', value: 'processing' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Returned', value: 'returned' },
                    { title: 'Failed', value: 'failed' },
                    { title: 'On Hold', value: 'on_hold' },
                    { title: 'Partially Refunded', value: 'partially_refunded' },
                    { title: 'Awaiting Payment', value: 'awaiting_payment' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            name: 'customerName',
            status: 'status',
            totalPrice: 'totalPrice',
            currency: 'currency',
            orderId: 'orderNumber',
        },
        prepare(select: any) {
            const orderIdSnippet = select.orderId ? `Order #${select.orderId}` : 'Order';
            return {
                title: `${orderIdSnippet} - ${select.name}`,
                subtitle: `${select.status} - ${select.totalPrice} ${select.currency}`,
            };
        },
    },
});




