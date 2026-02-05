import React from 'react'
import SocialLinks from './ui/SocialLinks'
import Logo from './Logo'
import QuickLinks from './QuickLinks'

const FooterBottom = () => {
  return (
    
      <div className='bg-nav_footer p-4 grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-4'>
        <div className=''>
            <Logo  />
            <SocialLinks className='py-2'/>
            <p className='text-sm text-gray-400'>
                Smart shopping starts here.Great products at better prices.Happiness delivered daily.
            </p>
        </div>

        <div>
             <QuickLinks/>
        </div>
        <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam labore nobis minima dolores laudantium velit maxime omnis sapiente doloribus adipisci.
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum iusto temporibus aspernatur minus tempore quo omnis odio molestias dolorum.
        </div>
        <p>Copyright © 2020 - All</p>
      </div>
    
  )
}

export default FooterBottom
