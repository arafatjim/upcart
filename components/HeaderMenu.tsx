'use client'
import { headerData } from '@/Constants/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React, { use } from 'react'

const HeaderMenu = ({className}:{className?: string;
}) => {

    const pathName= usePathname();
    console.log('path name is', pathName);

  return (
    <div className={cn("hidden md:flex items-center w-1/3 justify-center whitespace-nowrap  cursor-pointer  ", className)}>
        {headerData.map((item,index)=>{
            return (
                <Link key={index} href={item?.href} className={`text-md mx-4 hoverEffect relative group ${pathName===item?.href && 'text-warning'}`}>
                    {item?.title}

                <span className={`absolute right-1/2 h-0.5 -bottom-0.5 bg-warning group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathName===item?.href && 'w-1/2'}`}/>
                <span className={`absolute left-1/2 h-0.5 -bottom-0.5 bg-warning group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathName===item?.href && 'w-1/2'}`}/>
                </Link>
            )
        })}
    </div>
  )
}

export default HeaderMenu;
