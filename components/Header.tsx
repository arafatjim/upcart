import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <header className='p-4 bg-[#485460] top-0 text-primary-foreground font-bold w-7xl mx-auto text-lg  mb-4 rounded-bl-sm rounded-br-sm'>
      
      <Container className='flex justify-between w-full h-full  items-center'>
        <Logo />
        {/* nav-center */}
        <HeaderMenu/>
        {/* nav-r */}
        <div className="other">
          Other
        </div>

      </Container>
    </header>
  )
}

export default Header
