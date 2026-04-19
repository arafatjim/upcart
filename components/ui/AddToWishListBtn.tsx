
import { cn } from '@/lib/utils'
import { Product } from '@/sanity.types'
import { Heart } from 'lucide-react'
import React from 'react'

const AddToWishListBtn = ({className}:{className?:string}) => {
  return (
    <div className={cn('absolute  top-8 left-1 z-10 ', className)}>
        <Heart className={`w-6 p-1 text-white h-6 border-2 border-gray-400 rounded-full bg-success hover:bg-warning hover:text-red-500`}>WishList</Heart>
    </div>
  )
}

export default AddToWishListBtn
