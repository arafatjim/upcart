
import { cn } from '@/lib/utils'
import { Product } from '@/sanity.types'
import { Heart } from 'lucide-react'
import React from 'react'

const AddToWishListBtn = ({product, className}:{product:Product, className?:string}) => {
  return (
    <div className={cn('absolute top-1  right-1 z-10', className)}>
        <Heart className={`p-1 w-5 text-white h-5 rounded-full bg-success hover:bg-warning hover:text-red-500`}>WishList</Heart>
    </div>
  )
}

export default AddToWishListBtn
