import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <SignInButton mode="modal">
      <button className='px-2 py-1 font-semibold  text-white rounded-sm cursor-pointer bg-success hover:text-gray-600 hover:bg-warning hoverEffect transition'>
      Login
    </button>
    
    </SignInButton>
  )
}

export default Signin
