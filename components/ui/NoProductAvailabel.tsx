'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import {delay, motion} from 'motion/react'
import { Loader2 } from 'lucide-react'
type Props = {
  selectedTab: string
  className?: string
}

const NoProductAvailabel = (
  {   selectedTab, 
    className,
  }: Props
) => {
  return (
    
  <div className={cn("flex flex-col items-center justify-center border border-gray-700 rounded-2xl px-6 py-10 min-h-80 gap-4 space-y-4 bg-white/90",className)}>
    <motion.div
    initial={{opacity:0, y: -20, x: -20,}}
    animate={{opacity:1, y: 0, x: 0,}}
    transition={{duration: 0.5}}
    >
    <h2 className='text-4xl font-bold text-red-500'>No Product Available</h2>
    </motion.div>
    <motion.p
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0.2, duration: 0.5}}
    className='text-gray-500'
    >
    We're sorry, but there are no product matching on {""} 
    <span className='text-base font-semibold text-dark'>
      {selectedTab}
    </span>
    {''} criteria at the moment.
    </motion.p>

    <motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
  className="flex items-center space-x-2 text-gray-500"
>
  <Loader2 className="animate-spin text-green-600 h-10" />
  <span className='text-green-600 text-2xl'>We're restocking shortly.</span>
</motion.div>
  <motion.p
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay: 0.4, duration: 0.5 }}
    className='text-sm text-blue-600'
  >
    Please check back later or explore our other product categories.
  </motion.p>
  </div>
  )
}

export default NoProductAvailabel
