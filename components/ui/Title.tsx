import { cn } from '@/lib/utils'
import React, { Children } from 'react'

const Title = ({children,className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={cn('text-5xl mask-b-from-70%',className)}>
      {children}
    </div>
  )
}

const SubTitle = ({children,className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={cn('text-xl font-semibold',className)}>
        {children}
    </div>
  )
}

const Subtext =({children, className}:{children:React.ReactNode, className?:string})=>{
      return (
        <p className={cn("text-sm text-gray-400 p-1 ", className)}>{children}</p>
      )
}


export  {Title, SubTitle,Subtext};
