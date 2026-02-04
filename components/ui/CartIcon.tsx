import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart" className="group relative">
      <ShoppingBag className='w-4 h-4 md:w-5 md:h-5 text-primary-foreground group-hover:text-warning transition-colors duration-300 ease-in-out group hoverEffect '/>
      <span className='absolute -top-3 -right-2 bg-white text-black w-4 h-4 p-2 rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300 ease-in-out hoverEffect'>0</span>
    </Link>
  )
}

export default CartIcon
