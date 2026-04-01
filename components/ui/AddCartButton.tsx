import { Product } from '@/sanity.types'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
interface Props{
    product?: Product;
    className?: string;
}
const AddCartButton = ({ product, className }: Props) => {
    const isOutOfStock =product?.stock === 0;
    const buttonClass = `${className} ${isOutOfStock ? 'w-full bg-gray-400  cursor-not-allowed' : 'bg-success w-full hover:text-gray-600 hover:bg-warning cursor-pointer'} flex font-bold items-center text-center justify-center rounded-md border-2 border-gray-400 text-nowrap gap-2 text-white text-xs mx-1 p-1 focus:shadow-outline transition duration-150 ease`;
  return (
    <div>
        <button className={buttonClass}>
            <ShoppingBag size={14} />
            {isOutOfStock ?  "Out of Stock" : "Add to Cart"}
            </button>
    </div>
  )
}

export default AddCartButton
// 'bg-success flex font-bold items-center text-center justify-center rounded-2xl border-2 border-gray-400 text-nowrap gap-2 text-white text-xs mx-1 p-1 hover:bg-warning hover:text-gray-600 focus:shadow-outline transition duration-150 ease' id='addToCart' type='submit'