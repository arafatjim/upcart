import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavouriteBtn = () => {
  return (
    <div>
      
      <Link href="/cart" className="group relative group hoverEffect ">
      <Heart className='w-5 h-5 md:w-6 md:h-6 text-primary-foreground group-hover:text-warning transition-colors duration-300 ease-in-out group hoverEffect '/>
      <span className='absolute -top-3 -left-2 bg-white text-black w-4 h-4 p-2 rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300 ease-in-out  '>0</span>
    </Link>
      
    </div>
  )
}

export default FavouriteBtn
