import React from 'react'
import Container from './Container'
import FooterTop from './ui/FooterTop'


const Footer = () => {
  return (
    <footer className='w-full p-4 top-0 text-primary-foreground font-bold  mx-auto text-lg  mt-4 rounded-tl-sm rounded-tr-sm'>
      <Container>
        <FooterTop />
      </Container>
    </footer>
  )
}

export default Footer
