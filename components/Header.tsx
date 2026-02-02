import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './ui/SearchBar'
import CartIcon from './ui/CartIcon'
import FavouriteBtn from '@/app/FavouriteBtn'

const Header = () => {
  return (
    <header className='px-1 py-4 bg-[#485460] w-full mx-auto top-0 text-primary-foreground font-bold mb-4 rounded-bl-sm rounded-br-sm'>
      
      <Container className='flex justify-between  h-full  items-center'>
        <Logo />
        {/* nav-center */}
        <HeaderMenu/>
        {/* nav-r */}
        <div className="w-auto md: flex items-center justify-end gap-4">
          <SearchBar/>
          <CartIcon/>
          <FavouriteBtn/>
        </div>

      </Container>
    </header>
  )
}

export default Header
