import { cn } from '@/lib/utils'
import React, { Children } from 'react'

const Container = ({children, className

}:{
    children:React.ReactNode,
    className?:string;
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-1", className)}>
      {children}
    </div>
  )
}

export default Container
