export const orderType = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        { name: 'number', title: 'Number', type: 'string' },
        { name: 'customerName', title: 'Customer Name', type: 'string' },
        { name: 'totalAmount', title: 'Total Amount', type: 'number' },
        { name: 'status', title: 'Status', type: 'string' },
        { name: 'createdAt', title: 'Created At', type: 'datetime' },
    ],  
    preview: {
        select: {
            title: 'number',
            subtitle: 'customerName',
            media: 'createdAt',
        },
    },
};