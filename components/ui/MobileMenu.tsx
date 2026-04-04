'use client'
import React, { useState } from 'react'
import { Button } from './button'
import { AlignLeft } from 'lucide-react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] =useState(false);
  return (
    <>
      <button onClick={()=>setIsSideMenuOpen(!isSideMenuOpen)} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        
        <AlignLeft className="h-6 w-6 text-white"/>
        
      </button>
      <div className='md:hidden'>
        <SideMenu isOpen={isSideMenuOpen} onClose={()=>setIsSideMenuOpen(false)} />
      </div>
    </>
  )
}

export default MobileMenu
