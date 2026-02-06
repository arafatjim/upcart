import React from 'react'
import SocialLinks from './ui/SocialLinks'
import Logo from './Logo'
import QuickLinks from './QuickLinks'
import { Subtext, SubTitle } from './ui/Title'
import Categories from './ui/Categories'
import { Button } from './ui/button'
import Link from 'next/link'
import { Input } from './ui/input'
const FooterBottom = () => {
  return (
    
      <div>
        <div className='bg-nav_footer p-4 grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-4'>
        <div className=''>
            <Logo  />
            <SocialLinks className='py-2'/>
            <Subtext>
                Smart shopping starts here.Great products at better prices.Happiness delivered daily.
            </Subtext>
        </div>

        <div>
             <QuickLinks/>
        </div>
        <div>
            <Categories/>
        </div>
        <div className=''>
            <SubTitle>Newsletter</SubTitle>
            <Subtext>Subscribe for latest offers and deals</Subtext>
            <form className='py-2 px-0'>
                <Input className='p-2 text-sm border-2 w-full rounded-lg bg-light text-gray-700 border-white' type="email" name="" id="" placeholder='Enter your email here..' required />

                <Button className='p-2 my-4 w-full font-semibold  text-white rounded-sm cursor-pointer bg-success hover:text-gray-600 hover:bg-warning hoverEffect transition'>
                    
                        Subscribe Now
                    
                </Button>
            </form>
        </div>
        
      </div>

      <div className='flex justify-center p-2 text-center text-sm items-center gap-x-2 mx-auto bg-dark text-white'>
        
        ©{new Date().getFullYear()} 
        <Logo className='text-sm mask-b-from-70%'/>
        - All
        rights reserved.
    </div>

    
      </div>
    
  )
}

export default FooterBottom
