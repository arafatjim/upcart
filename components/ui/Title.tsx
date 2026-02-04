import { cn } from '@/lib/utils'
import React from 'react'

const Title = ({children,className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={cn('text-4xl font-extrabold',className)}>
      {children}
    </div>
  )
}

const subTitle = ({children,className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={cn('text-lg font-semibold',className)}>
        {children}
    </div>
  )
}



export  {Title, subTitle};
