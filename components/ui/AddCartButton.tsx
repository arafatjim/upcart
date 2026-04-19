'use client'
import React from 'react'
import { Product, PRODUCT_QUERY_RESULT } from '@/sanity.types';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
interface Props{
  product?: Product | PRODUCT_QUERY_RESULT[number];
  className?: string;
}
const AddCartButton = ({product, className}: Props) => {
  const isOutOfStock = product?.stock === 0;
  const handdleAddToCart = ()=>{
    window.alert('Added to cart');
  }
  return (
    <div>
      <Button 
      onClick={handdleAddToCart}
      disabled={isOutOfStock}
      className={cn('bg-success  w-full flex font-extrabold items-center text-center justify-center rounded-xl border-2 border-gray-400 text-nowrap gap-2 text-white text-sm mx-1 p-1 hover:bg-warning hover:text-gray-600 focus:shadow-outline transition duration-150 ease',className)}
      >
        <ShoppingBag/>
        {isOutOfStock ? 'Out of stock': 'Add to cart'}
      </Button>
    </div>
  )
}

export default AddCartButton
