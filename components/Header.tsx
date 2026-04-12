import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './ui/SearchBar'
import CartIcon from './ui/CartIcon'
import FavouriteBtn from '@/app/FavouriteBtn'
import MobileMenu from './ui/MobileMenu'
import { AuthButton } from './AuthButton'

const Header = async() => {
  return (
    <header className='bg-nav_footer shadow-md sticky top-0 z-50 py-4 mb-4 mt-1 text-white text-md rounded-b-lg'> 
      
      <Container className='flex items-center justify-between mx-auto'>
      <div className='w-auto flex items-center gap-2'>
        
        <MobileMenu/>
        <Logo />
        
      </div>
      {/* nav-center */}
      <HeaderMenu/>
      {/* nav-r */}
      <div className="w-auto px-1 flex items-center justify-end gap-3">
        <SearchBar/>
        <CartIcon/>
        <FavouriteBtn/>
        <AuthButton />
        
      </div>

      </Container>
    </header>
  )
}

export default Header
