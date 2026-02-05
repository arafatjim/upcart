import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './ui/SearchBar'
import CartIcon from './ui/CartIcon'
import FavouriteBtn from '@/app/FavouriteBtn'
import Signin from './ui/Signin'
import MobileMenu from './ui/MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'

const Header = async() => {
  const user =await currentUser(); 
  console.log('current user', user);
  return (
    <header className='mb-10 px-1 py-4 bg-nav_footer w-full mx-auto top-0 text-primary-foreground font-bold rounded-bl-sm rounded-br-sm z-50'>
      
      <Container className='flex justify-between  h-full  items-center'>
      <div className='w-auto flex items-center gap-2 justify-start md:gap-0'>
        
        <MobileMenu/>
        <Logo />
        
      </div>
      {/* nav-center */}
      <HeaderMenu/>
      {/* nav-r */}
      <div className="w-auto md: flex items-center justify-end gap-4">
        <SearchBar/>
        <CartIcon/>
        <FavouriteBtn/>
        <ClerkLoaded>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {!user && <Signin/>}
        
        </ClerkLoaded>
        
      </div>

      </Container>
    </header>
  )
}

export default Header
