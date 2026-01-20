import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}:{className?: string}) => {
  return (
    <Link href={'/'} className={cn('uppercase text-xl font-extrabold tracking-wider text-warning cursor-pointer  hover:cursor-pointer hoverEffect  group font-sans group-hover:text-white',className)}>
        Up<span className='text-white group-hover:text-warning'>cart</span>
    </Link>
  )
}

export default Logo
