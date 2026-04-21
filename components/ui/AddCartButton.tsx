'use client'
import React from 'react'
import { PRODUCT_QUERY_RESULT, PRODUCT_BY_CATEGORY_QUERY_RESULT } from '@/sanity.types';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';

interface Props {
  product?: PRODUCT_QUERY_RESULT[number] | PRODUCT_BY_CATEGORY_QUERY_RESULT[number];
  className?: string;
}

const AddCartButton = ({product, className}: Props) => {
  const isOutOfStock = product?.stock === 0;
  const handdleAddToCart = () => {
    window.alert('Added to cart');
  }

  return (
    <div>
      <Button 
        onClick={handdleAddToCart}
        disabled={isOutOfStock}
        className={cn(' mx-auto flex w-full bg-success hover:bg-warning items-center justify-center hover:text-gray-700 font-bold', className)}
      >
        <ShoppingBag/>
        {isOutOfStock ? 'Out of stock' : 'Add to cart'}
      </Button>
    </div>
  )
}

export default AddCartButton