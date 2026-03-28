import { Product } from '@/sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import React from 'react'

const ProductCart = ({product}:{product: Product}) => {
  return (
    <div className='text-sm border-2 p-0.5 border-dark/20  bg-[#ffffff] rounded-md grid grid-col-1 items-center justify-around w-46 h-62'>
      <div className='relative group overflow-hidden  items-center '>
        {product.image && product.image[0] && (
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.name || "product"}
          width={700}
          height={700}
        />
      )}
      {product?.status === "available" && (<p className='absolute top-2 left-2'>Sale</p> )}
      </div>
      <div className='p-2 text-sm text-gray-500'>
        product details
      </div>
    </div>
  )
}

export default ProductCart
