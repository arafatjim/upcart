import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className?: string}) => {
  return (
    <Link href={'/'} className={cn('uppercase text-xl font-extrabold tracking-wider  text-warning cursor-pointer hover:text-white hoverEffect  group font-sans ',className)}>
        Up<span className='text-white group-hover:text-warning hoverEffect'>cart</span>
    </Link>
  )
}

export default Logo
