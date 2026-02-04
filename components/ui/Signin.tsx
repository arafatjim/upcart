import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <SignInButton mode="modal">
      <button className="px-2 py-1 bg-warning text-black rounded-sm cursor-pointer hover:text-white hover:bg-success hoverEffect transition">
      Login
    </button>
    
    </SignInButton>
  )
}

export default Signin
