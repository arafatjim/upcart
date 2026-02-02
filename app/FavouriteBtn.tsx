import { Heart } from 'lucide-react'
import React from 'react'

const FavouriteBtn = () => {
  return (
    <div>
      
      <Heart className='w-4 h-4 md:w-5 md:h-5 text-primary-foreground group-hover:text-warning transition-colors duration-300 ease-in-out relative group hoverEffect'/>
      
      
    </div>
  )
}

export default FavouriteBtn
