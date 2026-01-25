import { headerData } from '@/Constants/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import React from 'react'

const HeaderMenu = ({className}:{className?: string;
}) => {
  return (
    <div className={cn("hidden md:flex items-center w-1/3 justify-center whitespace-nowrap  cursor-pointer font-semibold ", className)}>
        {headerData.map((item,index)=>{
            return (
                <Link key={index} href={item?.link} className={`mx-4 hoverEffect relative group`}>
                    {item?.title}

                <span className={`absolute  right-1/2 h-0.5 -bottom-0.5 bg-green-500 group-hover:w-1/2 hoverEffect group-hover:left-0`}/>
                <span className={`absolute  left-1/2 h-0.5 -bottom-0.5 bg-green-500 group-hover:w-1/2 hoverEffect group-hover:right-0`}/>
                </Link>
            )
        })}
    </div>
  )
}

export default HeaderMenu;
