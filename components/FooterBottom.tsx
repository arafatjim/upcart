import React from 'react'
import SocialLinks from './ui/SocialLinks'
import Logo from './Logo'
import QuickLinks from './QuickLinks'
import { Subtext, SubTitle } from './ui/Title'
import Categories from './ui/Categories'
import { Button } from './ui/button'
import Link from 'next/link'
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
                <input className='p-2 text-sm border-2 w-full rounded-lg bg-light text-gray-700 border-white' type="email" name="" id="" placeholder='Enter your email here..' />

                <Button className='my-4 px-0 w-full'>
                    <Link className='p-2 w-full font-semibold  text-white rounded-sm cursor-pointer bg-success hover:text-gray-600 hover:bg-warning hoverEffect transition' href={'/subscribe'}>
                        Subscribe Now
                    </Link>
                </Button>
            </form>
        </div>
        
      </div>

      <p className='flex justify-center mx-auto text-black'>Copyright © 2020 - All</p>
      </div>
    
  )
}

export default FooterBottom
