import React from 'react'
import Container from './Container'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='p-4 bg-primary text-primary-foreground font-bold text-lg mb-4 rounded-bl-sm rounded-br-sm'>
      
      <Container>
        <Logo />
        {/* nav-center */}

        {/* nav-r */}
      </Container>
    </header>
  )
}

export default Header
