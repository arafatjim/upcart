'use client'

import { ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Signin from './ui/Signin'

export const AuthButton = () => {
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Signin />
      </SignedOut>
    </ClerkLoaded>
  )
}
