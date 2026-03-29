import { Product } from '@/sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import React from 'react'
const statusConfig: Record<string, { text: string; className: string }> = {
  sale_product: { text: "Sale", className: "bg-red-400 text-white hover:bg-green-600" },
  available: { text: "Available", className: "bg-green-500 text-white hover:bg-green-600" },
  out_of_stock: { text: "Out of Stock", className: "bg-warning text-white hover:bg-green-600" },
  hot_deal: { text: "Hot Deal", className: "bg-orange-500 text-white hover:bg-green-600" },
  best_seller: { text: "Best Seller", className: "bg-purple-500 text-white hover:bg-green-600" },
  pre_order: { text: "Pre Order", className: "bg-black text-white hover:bg-green-600" },
  limited_edition: { text: "Limited Edition", className: "bg-yellow-500 text-white hover:bg-green-600" },
};
const ProductCart = ({product}:{product: Product}) => {
  const status = product?.status || "";
  console.log("status:", product?.status);
  return (
    <div className='text-sm border-2 p-1 border-dark/20  rounded-md grid grid-col-1 items-center justify-around gap-2 relative w-auto h-auto hover:shadow-2xl hover:shadow-success'>
      
      <div className='relative group overflow-hidden w-full h-56 items-center border-2 border-gray-200 flex item-center p-1 rounded-sm justify-center'>
        {status && (
  <p
  className={`absolute top-1 left-1 px-2 py-1 rounded-md text-xs ${
    statusConfig[status]?.className || "bg-black text-white "
  }`}
>
  {statusConfig[status]?.text || status}
</p>
)}

        {product.image && product.image[0] && (
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.name || "product"}
          width={700}
          height={200}
        />
      )}
        
      </div>
     
          <button className='px-2 py-1 bg-success text-white text-sm rounded-sm hover:bg-warning hover:text-gray-600'>View</button>
          <button className='px-2 py-1 bg-success text-white text-sm rounded-sm hover:bg-warning hover:text-gray-600'>Add to Cart</button>
    </div>
  )
}

export default ProductCart
