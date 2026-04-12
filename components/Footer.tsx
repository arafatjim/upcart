import React from 'react'
import Container from './Container'
import FooterTop from './ui/FooterTop'
import Logo from './Logo'
import SocialLinks from './ui/SocialLinks'
import FooterBottom from './FooterBottom'


const Footer = () => {
  return (
    <footer className='w-full top-0 text-primary-foreground font-bold  mx-auto text-lg  mt-4  '>
      <Container  >
        <FooterTop />

        {/* footer bottom-left */}
        <div className=''>
          <FooterBottom/>
        </div>
        
      </Container>
    </footer>
  )
}

export default Footer
