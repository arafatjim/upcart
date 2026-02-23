import { defineType,defineField } from 'sanity';

export const addressType = defineType({
    name: 'address',
    title: 'Address Name',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Address Name',
            type: 'string',
            description: 'The name of the address.',
            validation:(Rule) => Rule.required().max(100),
        }),
        defineField({  
            name: 'email',
            title: 'Email',
            type: 'email',
               
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
            description: 'The physical address.',
            validation:(Rule) => Rule.required().max(200),
        }),
        defineField({
            name:'city',
            title:'City',
            type:'string',
            description:'The city of the address.',
            validation:(Rule) => Rule.required().max(100),
        }),
        defineField({
            name:'state',
            title:'State',
            type:'string',
            description:'The state of the address.',
            validation:(Rule) => Rule.required().max(100),
        }),
        defineField({
            name:'zip',
            title:'Zip Code',
            type:'string',
            description:'Formate: 12345 or 12345-6789 ',
            validation:(Rule) => Rule.required()
            .regex(/^\d{5}(-\d{4})?$/, {
                name: 'zip code',
                invert: false,
            })
            .custom((zip) => {
                if(!zip?.match(/^\d{5}(-\d{4})?$/)){
                    return 'Please enter a valid zip code in the format 12345 or 12345-6789.';
                }
                return true;
            }),
        }),
        defineField({
            name:'default',
            title:'Default Address',
            type:'boolean',
            description:'Indicates whether this address is the default address for the user.',
            initialValue: false,
        }),
    ],
    preview:{
        select:{
            title:'name',
            subtitle:'address',
            city:'city',
            state:'state',
            isdefault:'default',
        },
        prepare({title, subtitle, city, state, isdefault}: {title: string; subtitle: string; city: string; state: string; isdefault: boolean}){
            return {
                title,
                subtitle:`${subtitle}, ${city}, ${state}${isdefault ? ' (Default)' : ''}`,
            };
        },
    },
});
